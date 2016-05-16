'use babel';

// Based on StackJS https://launchpad.net/stackjs

import StackOverflowAPI from './stack-overflow-api';

/**
  * @class Represents a URL.
  * @description Provides an easy way to manipulate the various components of a URL.
  *
  * @param {string} domain_name the domain name of the Stack Exchange site for this URL
  */
export default class StackOverflowURL {

    constructor (domain_name) {
        // Details about the StackOverflowURL
        let _prefix     = StackOverflowURL.AutoRequestPrefix;
        let _parameters = [];
        let _ids        = [];
        let _tags       = [];
        let _query_string = {};   // Query string parameters

        /**
          * Returns the complete URL as a string.
          *
          * @returns {string} a string representation of the URL
          */
        this.CompleteURL = function() {

            // Complete the first part of the URL
            var url = (_prefix == StackOverflowURL.SecureRequestPrefix)?'https':'http';
            url += '://api.stackexchange.com/2.0';

            // Append the information provided
            if (_parameters.length)     url += '/' + _parameters[0];
            if (_ids.length)            url += '/' + _ids.join(';');
            if (_parameters.length > 1) url += '/' + _parameters[1];
            if (_tags.length)           url += '/' + _tags.join(';');
            if (_parameters.length > 2) url += '/' + _parameters[2];

            // Encode and join the elements of the query string together
            var query_string_encoded = [];

            for (name in _query_string)
                query_string_encoded.push(encodeURIComponent(name) + '=' +
                                          encodeURIComponent(_query_string[name]));

            // Add the query string and return the string
            url += '?' + query_string_encoded.join('&');

            return url;
        };

        /**
          * Sets the prefix for the URL.
          *
          * <p>Note that the provided value will be ignored unless StackOverflowURL.DefaultPrefix
          * is set to StackOverflowURL.AutoRequestPrefix.</p>
          *
          * @param {integer} prefix the prefix to use
          * @returns {StackOverflowURL} the current instance
          */
        this.SetPrefix = function(prefix) {

            if (StackOverflowURL.DefaultPrefix == StackOverflowURL.AutoRequestPrefix)
                _prefix = prefix;

            return this;
        };

        /**
          * Adds a parameter to the the method of the StackOverflowURL.
          *
          * @param {string} parameter the parameter to add
          * @returns {StackOverflowURL} the current instance
          */
        this.AddParameter = function(parameter) {

            _parameters.push(parameter);

            return this;
        };

        /**
          * Adds the provided ID(s) to the StackOverflowURL.
          *
          * @param {integer|array} id either an ID or array of IDs
          * @returns {StackOverflowURL} the current instance
          */
        this.AddID = function(id) {

            if (typeof id == 'number')
                _ids.push(id);
            else
                _ids = _ids.concat(id);

            return this;
        };

        /**
          * Adds the provided tag(s) to the StackOverflowURL.
          *
          * @param {string|array} tag either a tag or an array of tags
          * @returns {StackOverflowURL} the current instance
          */
        this.AddTag = function(tag) {

            if (typeof tag == 'string')
                _tags.push(tag);
            else
                _tags = _tags.concat(tag);

            return this;
        };

        /**
          * Adds the specified query string parameter to the StackOverflowURL.
          *
          * @param {string} name the name of the parameter
          * @param {string} value the value for the parameter
          * @returns {StackOverflowURL} the current instance
          */
        this.SetQueryStringParameter = function(name, value) {

            _query_string[name] = value;

            return this;
        };

        // Set the API key parameter to the default and add the
        // provided site to the query string.
        this.SetQueryStringParameter('key', StackOverflowAPI.Key);

        if (typeof domain_name != 'undefined')
            this.SetQueryStringParameter('site', domain_name);
    }
}

/** Automatically chooses the best prefix. */
StackOverflowURL.AutoRequestPrefix     = 0;
/** Uses the standard (HTTP) prefix. */
StackOverflowURL.StandardRequestPrefix = 1;
/** Uses the secure (HTTPS) prefix. */
StackOverflowURL.SecureRequestPrefix   = 2;
/** The default prefix used for new StackOverflowURLs. */
StackOverflowURL.DefaultPrefix = StackOverflowURL.AutoRequestPrefix;
