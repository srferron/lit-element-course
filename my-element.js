// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  static get properties() { 
    return { 
      paragraph: { type: String },
    };
  }

  constructor() {
   super();
  }
 
  render(){
    return html`
   
      <!-- template content -->
      
      <input type="text" @input="${(event) => this.handleChange(event, '')}" />
      <p>${this.paragraph} - uno</p>
      <p>${this.paragraph} - dos </p>
      <p>${this.paragraph} - dos </p>
    `;
  }


  



//  updateValue(e) {
//   log.textContent = e.target.value;
// }
  handleChange(event, other) {
    //debugger
    this.paragraph = event.target.value + other;

    // document.getElementById("paragraph").innerHTML=document.getElementById("textbox22").value;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement); 