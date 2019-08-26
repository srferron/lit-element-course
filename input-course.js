// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class InputCourse extends LitElement {

  static get properties() { 
    return { 
      header: { type: String },
    };
  }

 
  render(){
    return html`
      <input type="text" @input="${(event) => this.handleInput(event, '')}" @change="${(event) => this.handleChange(event)}"/>
    `;
  }

  handleChange(event, other) {
      //debugger
    if(event.target.value.length>2){
      const customEvent = new CustomEvent('input-change', {
        detail:{inputChange: event.target.value},
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(customEvent);
    }

    
  }

  handleInput(event, other) {
    //debugger
    const customEvent = new CustomEvent('input-pulse', {
        detail:{inputPulses: event.target.value},
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(customEvent);
  }
}

// Register the new element with the browser.
customElements.define('input-course', InputCourse); 