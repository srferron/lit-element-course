import { html, render } from 'lit-html';

export const CSSComponent2 =  {


  append() {
    const css =  html`
     <style>
        :host([hidden]) { display: none; }
        :host { display: block;
          background-color: red;
          font-size: 45;
        }
        h2{color: yellow; }
        p:last-child {
          display: block;
          color: yellow;
        }
        h1-course {
          display: block;
          background: blue;
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
    `;
    debugger
    // document.head.appendChild(css);
    render(css, document.head);
  }

    // static get styles() {
    //   return css`
    //   :host {
    //     display: block;
    //   }
    // :host([hidden]) { display: none; }
    
    // :host { display: block;
    //     background-color: brown;
    //     font-size: 45;
    // }
    
    // p:last-child {
    //     display: block;
    //     color: yellow;
    // }

    // p:nth-child(1) {
    //     color: white;
    // }
    
    // p:first-child {
    //     color: blue;
    // }

    // input[type=text] {
    //     display: block;
    //     border-radius:8px;
    //     border: 1px solid #666;
    // }
    //   `;

    // } 
  }

// customElements.define('css-component-2', CSSComponent2);