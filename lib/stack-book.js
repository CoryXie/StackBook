'use babel';

import StackBookView from './stack-book-view';
import StackOverflowURL from './stack-overflow-url';
import StackOverflowAPI from './stack-overflow-api';
import StackOverflowRequest from './stack-overflow-request';
import StackOverflowResponse from './stack-overflow-response';

import { CompositeDisposable } from 'atom';

export default {

  stackBookView: null,
  modalPanel: null,
  subscriptions: null,
  url: null,

  activate(state) {
    this.url = new StackOverflowURL('stackapps');
    this.api = new StackOverflowAPI();
    this.stackBookView = new StackBookView(state.stackBookViewState);
    this.modalPanel = atom.workspace.addBottomPanel({
      item: this.stackBookView.getRootElement(),
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
    var req = new StackOverflowRequest(new StackOverflowURL('stackapps'));

    // Get the response object
    var res = req.Badges().Exec();

    res.Fetch(function(data) {
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
