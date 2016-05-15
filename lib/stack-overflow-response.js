'use babel';

// Based on StackJS https://launchpad.net/stackjs

import Request from './stack-overflow-request';
import API from './stack-overflow-api';
/**
  * @class Provides means for retrieving paged data from the API.
  * @description This class actually performs the requests for data in the API.
  *
  * @param {URL} url the base URL to use for requests
  */
export default class Response {

    constructor (url) {
        // Store a copy of the base URL
        let _url = url;

        // Data required for pagination
        let _current_page = 1;
        let _pagesize;

        /**
          * Begins fetching the data with the provided callback.
          *
          * <p>Note that the callback may return false at any time to stop any
          * further pages from being requested.</p>
          *
          * @param {function} callback the callback for successful requests
          * @param {boolean} [fetch_multiple] whether or not to fetch multiple pages
          */
        this.Fetch = function(callback, fetch_multiple) {

            // Store a reference to this instance
            let self = this;

            // Fetch the JSON data
            API.FetchJSON(_url, function(data) {

                // Let the callback know if more data is being retrieved
                let more_data = false;

                if (typeof fetch_multiple != 'undefined' && fetch_multiple) {

                    if (typeof data['has_more'] != 'undefined')
                        data['has_more'] && (more_data = true);
                    else
                        data.length && (more_data = true);
                }

                // Invoke the supplied callback
                let fetch_next = callback(data['items'], more_data);

                // If the function returned false, then stop
                if (more_data && !(typeof fetch_next != 'undefined' && !fetch_next))
                    self.Fetch(callback, true);

            });

            // Increment the page count
            _url.SetQueryStringParameter('page', ++_current_page);
        };

        /**
          * Jumps to the specified page for the next request.
          *
          * @param {integer} page the page to retrieve
          * @returns {Response} the current instance
          */
        this.Page = function(page) {
            _current_page = page;
        };
    }
}
