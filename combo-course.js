// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class ComboCourse extends LitElement {

  static get properties() { 
    return { 
      header: { type: String },
    };
  }

 
  render(){
    return html`
    <select @change="${(event) => this.handleChange(event)}">
    <option value="" selected disabled hidden>Elige un estilo</option>
      <option value="css1">Estilo 1</option>
      <option value="css2">Estilo 2</option>
    </select>
    `;
  }

  handleChange(event) {
      //debugger
    if(event.target.value.length>2){
      const customEvent = new CustomEvent('combo-change', {
        detail:{comboChange: event.target.value},
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(customEvent);
    }

    
  }

}

// Register the new element with the browser.
customElements.define('combo-course', ComboCourse); 