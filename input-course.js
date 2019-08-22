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
      <input type="text" @input="${(event) => this.handleChange(event, '')}" />
    `;
  }

  handleChange(event, other) {
    //debugger
    let customEvent = new CustomEvent('input-change', {
        detail:{inputChanges: event.target.value},
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(customEvent);
  }
}
// Register the new element with the browser.
customElements.define('input-course', InputCourse); 