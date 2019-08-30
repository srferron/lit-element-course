import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class KeypadCourse extends LitElement {

  static get properties() { 
    return { 
      header: { type: String },
    };
  }


//   button:nth-child(1) {
//     background-color: #87CEFA;
//   }
 
  render(){
    return html`
        <span><button @click="${(event) => this.handleClick(event,'click-xhtmlrequest')}">xhtmlRequest</button></span>
        <span><button @click="${(event) => this.handleClick(event,'click-fetch')}">Fetch</button></span>
        <span><button @click="${(event) => this.handleClick(event,'click-axios')}">Axios</button></span>
    `;
  }

  handleClick(event,eventName){
    const customEvent = new CustomEvent(eventName, {
        bubbles: true,
        composed: true
    });
    this.dispatchEvent(customEvent);
  }
}

// Register the new element with the browser.
customElements.define('keypad-course', KeypadCourse); 