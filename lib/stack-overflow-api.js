'use babel';

// Based on StackJS https://launchpad.net/stackjs

import Response from './stack-overflow-response';
import Site from './stack-overflow-site';
request = require('request');
/**
  * @class Main entry point for interaction with Stack.JS.
  * @description Contains utility methods for retrieving data from the API and managing caches, authentication, etc.
  */
export default class API {

    constructor () {

        /**
          * Retrieves a specific Stack Exchange site by name.
          *
          * <p>Note that the domain name doesn't need to include the TLD (top level domain).</p>
          *
          * @param {string} domain_name the domain name for the site
          * @returns {Site} a site object
          */
        this.Site = function(domain_name) {
            return new Site(domain_name);
        };

        /**
          * Retrieves all sites in the Stack Exchange network.
          *
          * @returns {Response} a response object
          */
        this.Sites = function() {
            return new Response(new URL().AddParameter('sites'));
        };
    }
}

/** The API key for the application (StackBook). */
API.Key = 'x2erTkISacQFdKCXt4cbJQ((';
/** The minimum time between successive requests to the API. */
API.RequestInterval = 1000 / 30;
API._UniqueID = 0;  // an ever-increasing integer used for unique IDs
API._LastRequestTimestamp = 0; // the timestamp of the last request

/**
  * Returns an identifier that is guaranteed unique for the current session.
  * @returns {string} the identifier
  */
API.GenerateUniqueName = function() {

    return 'StackJS_Callback_' + (API._UniqueID++);
};

/**
  * Fetches JSON data from the specified URL.
  *
  * @param {URL} url the URL of the request
  * @param {function} callback the callback that will be invoked when the data is available
  */
API.FetchJSON = function(url, callback) {
    // In order to make sure we're not sending too many requests,
    // we need to pause if necessary to comply with rate-limit guidelines.
    let DoURLRequest = function() {
        let src = url.CompleteURL();
        //document.getElementsByTagName('head')[0].appendChild(script);
        var request = require('request');
        var options = {
            uri: src,
            method: 'GET',
            gzip: true
        };
        request(options, function (error, response, body) {
            if (!error) {
                var data = JSON.parse(body);
                // If an error message was provided in the response,
                // then invoke the failure callback - otherwise invoke
                // the success callback.
                if (typeof data['error_message'] != 'undefined')
                    throw data['error_message'];
                else if(typeof data['items'] != 'undefined')
                    callback(data);
                else
                    throw "'items' missing from response data.";
            }
        });
    };

    // Calculate the time since the last request
    let current_time = new Date().getTime();
    let difference = current_time - API._LastRequestTimestamp;

    // If not enough time has elapsed, then wait
    if (difference < API.RequestInterval)
        window.setTimeout(function() { DoURLRequest(); },
                          API.RequestInterval - difference);
    else
        DoURLRequest();
};
