'use babel';

var {TextEditor} = require('atom');

export default class StackBookView {

  constructor(serializedState) {
    // Create root element
    this.root = document.createElement('atom-panel');
    this.root.classList.add('stack-book');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'StackBook reads StackOverflow like a Book!';
    message.classList.add('message');

    let questionEditor = atom.workspace.buildTextEditor({mini: true});
    questionEditor.setText('atom');
    questionEditor.setPlaceholderText('Your coding question!');
    let questionEditorElement = atom.views.getView(questionEditor);

    const form = document.createElement("form");
    let button = document.createElement("button");
    button.type = 'button';
    button.textContent = 'Ask!';
    button.classList.add('native-key-bindings');

    form.appendChild(questionEditorElement);
    form.appendChild(button);
    this.root.appendChild(message);
    this.root.appendChild(form);

    button.addEventListener("click", function(){
        console.log("Button clicked (" + questionEditor.getText() + ")");
    });
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.root.remove();
  }

  getRootElement() {
    return this.root;
  }

}
