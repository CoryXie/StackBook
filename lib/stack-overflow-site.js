'use babel';

// Based on StackJS https://launchpad.net/stackjs

import StackOverflowRequest from './stack-overflow-request';
import StackOverflowURL from './stack-overflow-url';

/**
  * @class Represents a Stack Exchange site.
  * @description This class provides a means for accessing the various endpoints on a site.
  *
  * @param {string|object} site_data either the name of the site or the site's data from the /sites route
  */
export default class StackOverflowSite {

    constructor (site_data) {
        // The current domain name for this site
        // (used for constructing URLs)
        let _domain_name = '';

        // The data for the site (retrieved from /stats, etc.)
        let _information;

        // If the provided parameter is a string, then use that
        // as the domain - otherwise extract it from the data.
        if (typeof site_data == 'string')
            _domain_name = site_data;
        else {
            _domain_name = site_data['api_site_parameter'];
            _information = site_data;
        }

        /**
          * Retrieves the answers on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Answers = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Answers(id);
        };

        /**
          * Retrieves the badges on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Badges = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Badges(id);
        };

        /**
          * Retrieves the comments on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Comments = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Comments(id);
        };

        /**
          * Simulates an error condition.
          *
          * @param {integer} [id] an ID
          * @returns {StackOverflowRequest} a request object
          */
        this.Errors = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Errors(id);
        };

        /**
          * Retrieves recent events on a site.
          *
          * @returns {StackOverflowRequest} a request object
          */
        this.Events = function() {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Events();
        };

        /**
          * Retrieves information about the site.
          *
          * @returns {StackOverflowRequest} a request object
          */
        this.Info = function() {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Info();
        };

        /**
          * Retrieves the posts on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Posts = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Posts(id);
        };

        /**
          * Retrieves privilege levels available on the site.
          *
          * @returns {StackOverflowRequest} a request object
          */
        this.Privileges = function() {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Privileges();
        };

        /**
          * Retrieves the questions on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Questions = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Questions(id);
        };

        /**
          * Retrieves the revision history for posts.
          *
          * @param {integer|array} id either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Revisions = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Revisions(id);
        };

        /**
          * Searches for questions with the provided parameters.
          *
          * @returns {StackOverflowRequest} a request object
          */
        this.Search = function() {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Search();
        };

        /**
          * Retrieves questions that are similar to the provided title.
          *
          * @returns {StackOverflowRequest} a request object
          */
        this.Similar = function() {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Similar();
        };

        /**
          * Retrieves the suggested edits on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.SuggestedEdits = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).SuggestedEdits(id);
        };

        /**
          * Retrieves the tags on the site.
          *
          * @param {integer|array} [tag] either a single tag or array of tags
          * @returns {StackOverflowRequest} a request object
          */
        this.Tags = function(tag) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Tags(tag);
        };

        /**
          * Retrieves the users on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {StackOverflowRequest} a request object
          */
        this.Users = function(id) {
            return new StackOverflowRequest(new StackOverflowURL(_domain_name)).Users(id);
        };
    }
}
