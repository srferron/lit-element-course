// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class H1Course extends LitElement {

    static get properties() { 
        return { 
          header: { type: String },
        };
      }
 
  render(){
    return html`
      <h1>h1:${this.header}</h1>
    `;
  }
}
// Register the new element with the browser.
customElements.define('h1-course', H1Course); 