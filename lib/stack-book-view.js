'use babel';

export default class StackBookView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('stack-book');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'StackBook reads StackOverflow like a Book!';
    message.classList.add('message');

    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    input.maxlength = "100";
    input.placeholder = "Your coding question!";
    const button = document.createElement("button");
    button.type = "button";
    form.appendChild(input);
    form.appendChild(button);
    button.textContent = "Ask!";
    button.addEventListener("click", function(){
        console.log("Button clicked!!" + input.value);
    });
    this.element.appendChild(message);

    this.element.appendChild(form);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
