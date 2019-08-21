// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
    <style>
        :host([hidden]) { display: none; }
        :host { display: block;
          background-color: red;
          font-size: 45;
        }
      </style>
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement); 