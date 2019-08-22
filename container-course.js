import { LitElement, html, css } from 'lit-element';

import './input-course.js';
import './h1-course.js';


class ContainerCourse extends LitElement {
    static get properties() { 
        return { 
          header: { type: String },
        };
      }


    render() {
        return html`
        <input-course @input-change="${(event) => this.handleInputEvent(event, '')}"></input-course>
        <h1-course header="${this.header}"></h1-course>
        `;
    }

    handleInputEvent(event, other) {
        
        console.log("log:"+event.detail.inputChanges);
        this.header = event.detail.inputChanges + other;
        //debugger
      }
}
customElements.define('container-course', ContainerCourse);