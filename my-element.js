// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  render(){
    return html`
    <style>
        :host([hidden]) { display: none; }
        :host { display: block;
          background-color: red;
          font-size: 45;
        }
      </style>
      <!-- template content -->
      
      <input type="text" id="textbox22" value="Change the paragraph" @change="${this.handleChange}"/>
      <p id="paragraph">A paragraph</p>
    `;
  }

  handleChange(e) {
    console.log("asdf2");
    console.log("En null:"+document.getElementById("textbox22"));
    console.log("Error:"+document.getElementById("textbox22").value);
    document.getElementById("paragraph").innerHTML=document.getElementById("textbox22").value;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement); 