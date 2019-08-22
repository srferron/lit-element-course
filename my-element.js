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
  //  this.input = document.getElementById.value;
  //  this.paragraph = document.getElementById('paragraph');
  }
 
  render(){
    return html`
    <style>
        :host([hidden]) { display: none; }
        :host { display: block;
          background-color: red;
          font-size: 45;
        }
        p:last-child {
          display: block;
          color: yellow;
        }

        p:nth-child(1) {
          color: white;
        }
        p:first-child {
          color: blue;
        }

        input[type=text] {
          display: block;
          border-radius:8px;
          border: 1px solid #666;
        }

      </style>
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