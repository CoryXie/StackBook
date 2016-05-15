'use babel';

// Based on StackJS https://launchpad.net/stackjs

import Response from './stack-overflow-response';
import URL from './stack-overflow-url';
/**
  * @class A request for an API resource.
  * @description This class provides chainable methods for setting up a request.
  *
  * @param {URL} url the URL for the request
  */
export default class Request {

    constructor (url) {

        // Stores the current URL that we use for the request
        let _url = url;

        /**
          * Finalizes the request and creates the response object.
          *
          * @returns {Response} the response for the request
          */
        this.Exec = function() {

            return new Response(_url);
        };

        /**
          * Retrieves the answers on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Answers = function(id) {

            _url.AddParameter('answers');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Retrieves the badges on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Badges = function(id) {

            _url.AddParameter('badges');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Retrieves the badges on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Comments = function(id) {

            _url.AddParameter('comments');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Retrieves only elected moderators.
          *
          * @returns {Request} the current instance
          */
        this.Elected = function() {

            _url.AddParameter('elected');

            return this;
        };

        /**
          * Simulates an error condition.
          *
          * @param {integer} [id] an ID
          * @returns {Request} the current instance
          */
        this.Errors = function(id) {

            _url.AddParameter('errors');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Retrieves recent events on a site.
          *
          * @returns {Request} the current instance
          */
        this.Events = function() {

            _url.AddParameter('events');

            return this;
        };

        /**
          * Returns frequently asked questions for a tag.
          *
          * @returns {Request} the current instance
          */
        this.Faq = function() {

            _url.AddParameter('faq');

            return this;
        };

        /**
          * Retrieves the questions favorited by the current set of users.
          *
          * @returns {Request} the current instance
          */
        this.Favorites = function() {

            _url.AddParameter('favorites');

            return this;
        };

        /**
          * Retrieves the contents of a user's inbox.
          *
          * @returns {Request} the current instance
          */
        this.Inbox = function() {

            _url.AddParameter('inbox');

            return this;
        };

        /**
          * Retrieves information about the site.
          *
          * @returns {Request} the current instance
          */
        this.Info = function() {

            _url.AddParameter('info');

            return this;
        };

        /**
          * Retrieves questions that are linked with the current set of questions.
          *
          * @returns {Request} the current instance
          */
        this.Linked = function() {

            _url.AddParameter('linked');

            return this;
        };

        /**
          * Uses the user ID represented by the provided access token.
          *
          * @returns {Request} the current instance
          */
        this.Me = function() {

            _url.AddParameter('me');

            return this;
        };

        /**
          * Retreieves comments that mention the current set of users.
          *
          * @returns {Request} the current instance
          */
        this.Mentioned = function() {

            _url.AddParameter('mentioned');

            return this;
        };

        /**
          * Retrieves only moderator users.
          *
          * @returns {Request} the current instance
          */
        this.Moderators = function() {

            _url.AddParameter('moderators');

            return this;
        };

        /**
          * Retrieves only named badges.
          *
          * @returns {Request} the current instance
          */
        this.Name = function() {

            _url.AddParameter('name');

            return this;
        };

        /**
          * Retrieves only questions with no answer.
          *
          * @returns {Request} the current instance
          */
        this.NoAnswers = function() {

            _url.AddParameter('no-answers');

            return this;
        };

        /**
          * Retrieves both questions and answers on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Posts = function(id) {

            _url.AddParameter('posts');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Retrieves privilege levels available on the site.
          *
          * @returns {Request} the current instance
          */
        this.Privileges = function() {

            _url.AddParameter('privileges');

            return this;
        };

        /**
          * Retrieves the questions on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Questions = function(id) {

            _url.AddParameter('questions');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Retrieves the recent recipients of the current set of badges.
          *
          * @returns {Request} the current instance
          */
        this.Recipients = function() {

            _url.AddParameter('recipients');

            return this;
        };

        /**
          * Retrieves questions related to the current set of questions.
          *
          * @returns {Request} the current instance
          */
        this.Related = function() {

            _url.AddParameter('related');

            return this;
        };

        /**
          * Retrieves the reputation changes for the current set of users.
          *
          * @returns {Request} the current instance
          */
        this.Reputation = function() {

            _url.AddParameter('reputation');

            return this;
        };

        /**
          * Retrieves the revision history for posts.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Revisions = function(id) {

            _url.AddParameter('revisions');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Searches for questions with the provided parameters.
          *
          * @returns {Request} the current instance
          */
        this.Search = function() {

            _url.AddParameter('search');

            return this;
        };

        /**
          * Retrieves questions that are similar to the provided title.
          *
          * @returns {Request} the current instance
          */
        this.Similar = function() {

            _url.AddParameter('similar');

            return this;
        };

        /**
          * Retrieves suggested edits for posts on the site.
          *
          * @returns {Request} the current instance
          */
        this.SuggestedEdits = function() {

            _url.AddParameter('suggested-edits');

            return this;
        };

        /**
          * Retrieves synonyms for the current set of tags.
          *
          * @returns {Request} the current instance
          */
        this.Synonyms = function() {

            _url.AddParameter('synonyms');

            return this;
        };

        /**
          * Retrieves the tags on the site.
          *
          * @param {string|array} [tag] either a single tag or array of tags
          * @returns {Request} the current instance
          */
        this.Tags = function(tag) {

            _url.AddParameter('tags');

            if (typeof tag != 'undefined')
                _url.AddTag(tag);

            return this;
        };

        /**
          * Retrieves the timeline for an object on the site.
          *
          * @returns {Request} the current instance
          */
        this.Timeline = function() {

            _url.AddParameter('timeline');

            return this;
        };

        /**
          * Retrieves the top 30 answer tags for the current user.
          *
          * @returns {Request} the current instance
          */
        this.TopAnswerTags = function() {

            _url.AddParameter('top-answer-tags');

            return this;
        };

        /**
          * Retrieves the top answerers for the current set of tags.
          *
          * @returns {Request} the current instance
          */
        this.TopAnswerers = function() {

            _url.AddParameter('top-answerers');

            return this;
        };

        /**
          * Returns the top answers a user has posted with the current set of tags.
          *
          * @returns {Request} the current instance
          */
        this.TopAnswers = function() {

            _url.AddParameter('top-answers');

            return this;
        };

        /**
          * Retrieves the top askers for the current set of tags.
          *
          * @returns {Request} the current instance
          */
        this.TopAskers = function() {

            _url.AddParameter('top-askers');

            return this;
        };

        /**
          * Retrieves the top 30 question tags for the current user.
          *
          * @returns {Request} the current instance
          */
        this.TopQuestionTags = function() {

            _url.AddParameter('top-question-tags');

            return this;
        };

        /**
          * Returns the top questions a user has asked with the current set of tags.
          *
          * @returns {Request} the current instance
          */
        this.TopQuestions = function() {

            _url.AddParameter('top-questions');

            return this;
        };

        /**
          * Retrieves questions with no accepted answer.
          *
          * @returns {Request} the current instance
          */
        this.Unaccepted = function() {

            _url.AddParameter('unaccepted');

            return this;
        };

        /**
          * Retrieves questions with no answers.
          *
          * @returns {Request} the current instance
          */
        this.Unanswered = function() {

            _url.AddParameter('unanswered');

            return this;
        };

        /**
          * Retrieves only unread inbox items.
          *
          * @returns {Request} the current instance
          */
        this.Unread = function() {

            _url.AddParameter('unread');

            return this;
        };

        /**
          * Retrieves the users on the site.
          *
          * @param {integer|array} [id] either a single ID or array of IDs
          * @returns {Request} the current instance
          */
        this.Users = function(id) {

            _url.AddParameter('users');

            if (typeof id != 'undefined')
                _url.AddID(id);

            return this;
        };

        /**
          * Returns the wikis for the current set of tags.
          *
          * @returns {Request} the current instance
          */
        this.Wikis = function() {

            _url.AddParameter('wikis');

            return this;
        };
    }
}
