import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class KeypadCourse extends LitElement {

  static get properties() { 
    return { 
      header: { type: String },
    };
  }

  static get styles() {
    return css`
      
      ul:nth-child(1) button {
        background-color: #87CEFA;
     }

     ul:nth-child(2) button {
        background-color: #DCDCDC;
     }
     
     ul:nth-child(3) button {
        background-color: #7FFFD4;
     }

    `;
  }

  render(){
    return html`
        <ul><span><button @click="${(event) => this.handleClick(event,'click-xhtmlrequest')}">xhtmlRequest</button></span></ul>
        <ul><span><button @click="${(event) => this.handleClick(event,'click-fetch')}">Fetch</button></span></ul>
        <ul><span><button @click="${(event) => this.handleClick(event,'click-axios')}">Axios</button></span></ul>
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