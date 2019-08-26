import { LitElement, html, css } from 'lit-element';

import './input-course.js';
import './h1-course.js';
import './list-course.js';

class ContainerCourse extends LitElement {
    
  static get properties() { 
        return { 
          header: { type: String },
          table: { type: Array }
        };
      }
      
      constructor() {
        super();
        this.table = [];
      }

    render() {
        return html`
        
        <input-course @input-pulse="${(event) => this.handleInputEvent(event, '')}" @input-change="${(event) => this.handleChangeEvent(event)}"></input-course>
        <h1-course header="${this.header}"></h1-course>
        
        <span>
          <h2>Issue 5</h2>
          <list-course .table="${this.table}"></list-course>
        </span>
        `;
    }
    // pepe;

    handleChangeEvent(event) {   
      console.log("log change2:"+event.detail.inputChange);
      this.table.push(event.detail.inputChange)
      this.table=[...this.table];
      //debugger
    }
   
    handleInputEvent(event, other) {
        
        console.log("log:"+event.detail.inputPulses);
        this.header = event.detail.inputPulses + other;
      }
}
customElements.define('container-course', ContainerCourse);