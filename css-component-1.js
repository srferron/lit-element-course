import { LitElement, html, css } from 'lit-element';

class CSSComponent1 extends LitElement {
    
    static get styles() {
      return css`
      :host {
        display: block;
      }
    :host([hidden]) { display: none; }
    
    :host { display: block;
        background-color: yellowgreen;
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
      `;

    } 
  }

customElements.define('css-component-1', CSSComponent1);