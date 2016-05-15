'use babel';

import StackBookView from './stack-book-view';
import URL from './stack-overflow-url';
import API from './stack-overflow-api';
import Request from './stack-overflow-request';
import Response from './stack-overflow-response';

import { CompositeDisposable } from 'atom';

export default {

  stackBookView: null,
  modalPanel: null,
  subscriptions: null,
  url: null,

  activate(state) {
    this.url = new URL('stackapps');
    this.api = new API();
    this.stackBookView = new StackBookView(state.stackBookViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.stackBookView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'StackBook:toggle': () => {this.toggle()},
      'StackBook:query': () => {this.query()}
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.stackBookView.destroy();
  },

  serialize() {
    return {
      stackBookViewState: this.stackBookView.serialize()
    };
  },

  // TODO: Will need to add parameters
  query() {
    // Construct a new request object and initialize
    // it with some parameters.
    var req = new Request(new URL('stackapps'));

    // Get the response object
    var response = req.Badges().Exec();

    response.Fetch(function(data) {
        //The data is in JSON array format
        console.log(data);
        });
    },

  toggle() {
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
