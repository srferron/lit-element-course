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
      /*
      En este caso necesitamos  el data-bind(https://lit-element.polymer-project.org/guide/templates#bind-properties-to-child-elements)
      a un evento @input el input es nativo de js(https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event),
      mejor que al changed
      pero tambien podemos bindear .value de forma directa a una property todo
      <input
        type="text"
        .value=${this.todo}
        @input=${this.handleInput}
      />
      */
      <input type="text" id="textbox22" value="Change the paragraph" @change="${this.handleChange}"/>
      <p id="paragraph">A paragraph</p>
    `;
  }

  handleChange(e) {
    console.log("asdf2");
    console.log("En null:"+document.getElementById("textbox22"));
    console.log("Error:"+document.getElementById("textbox22").value);
    /// aquí es donde comienza el data-bind 
    /// https://www.wintellect.com/data-binding-pure-javascript/
    document.getElementById("paragraph").innerHTML=document.getElementById("textbox22").value;
    
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement); 
