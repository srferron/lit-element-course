import { LitElement, html, css } from 'lit-element';

import './input-course.js';
import './h1-course.js';
import './list-course.js';
import './keypad-course.js';
import axios from 'axios';

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
          <h2>Services Issue</h2>
          <keypad-course @click-xhtmlrequest="${(event) => this.handleClickXHTMLrequest(event)}" @click-fetch="${(event) => this.handleClickFetch(event)}handleClickAxios" @click-axios="${(event) => this.handleClickAxios(event)}"></keypad-course>
          <list-course .table="${this.table}"></list-course>
        </span>
        `;
    }


    handleClickXHTMLrequest(event) {   
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://reqres.in/api/unknown", true);
      xhr.onload = () =>  this._assignValues(JSON.parse(xhr.responseText));
      xhr.send();
      //debugger
    }

    handleClickFetch(event) {  
      fetch('https://reqres.in/api/unknown')
        .then(response => response.json())
        .then((data) => this._assignValues(data));
    }

    handleClickAxios(event) {  
      axios.get('https://reqres.in/api/unknown')
        .then((response) => {
          console.log(response);
          _assignValues(response);
        })
      }

    _assignValues(obj){
        obj.data.map(element => this.table.push(element.name));
        this.table=[...this.table];
    }
   
    handleInputEvent(event, other) {
        
        console.log("log:"+event.detail.inputPulses);
        this.header = event.detail.inputPulses + other;
      }
}
customElements.define('container-course', ContainerCourse);