import { LitElement, html, css } from 'lit-element';

import './input-course.js';
import './h1-course.js';
import './list-course.js';
import './keypad-course.js';
//import axios from 'axios';

class ContainerCourse extends LitElement {
    
  static get properties() { 
        return { 
          header: { type: String },
          table: { type: Array }
        };
      }

  constructor() {
    super();
    this.table = [{}];
  }

  static get styles() {
    return css`
      #loader {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        width: 150px;
        height: 150px;
        margin: -75px 0 0 -75px;
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
      }

      @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* Add animation to "page content" */
      .animate-bottom {
        position: relative;
        -webkit-animation-name: animatebottom;
        -webkit-animation-duration: 1s;
        animation-name: animatebottom;
        animation-duration: 1s
      }

      @-webkit-keyframes animatebottom {
        from { bottom:-100px; opacity:0 } 
        to { bottom:0px; opacity:1 }
      }

      @keyframes animatebottom { 
        from{ bottom:-100px; opacity:0 } 
        to{ bottom:0; opacity:1 }
      }
    `;
  }
  
    render() {
        return html`
        
        <div  id="loader" style="display:none;"></div>
        <div id="myDiv">
            <input-course @input-pulse="${(event) => this.handleInputEvent(event, '')}" @input-change="${(event) => this.handleChangeEvent(event)}"></input-course>
            <h1-course header="${this.header}"></h1-course>
            
            <span>
              <h2>Services Issue</h2>
              <keypad-course @click-xhtmlrequest="${(event) => this.handleClickXHTMLrequest(event)}" @click-fetch="${(event) => this.handleClickFetch(event)}handleClickAxios" @click-axios="${(event) => this.handleClickAxios(event)}"></keypad-course>
              
              <list-course .table="${this.table}"></list-course>
            </span>
        </div>
        `;
    }

    showSpinner() {
      const divs=document.querySelector('container-course').shadowRoot.querySelectorAll('div');
      divs[0].style.display = "block";
      divs[1].style.display = "none";
    }

    showContents() {
      const divs=document.querySelector('container-course').shadowRoot.querySelectorAll('div');
      divs[0].style.display = "none";
      divs[1].style.display = "block";
    }

    handleClickXHTMLrequest(event) {
      this.showSpinner();
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://reqres.in/api/unknown", true);
      xhr.onload = () =>  {
        console.log(xhr.responseText);
        this._assignValues(JSON.parse(xhr.responseText),"#87CEFA");
        this.showContents();
      }
      xhr.send();
      //debugger
    }

    handleClickFetch(event) {
      this.showSpinner();
      fetch('https://reqres.in/api/unknown')
        .then(response => response.json())
        .then((data) => {
          this._assignValues(data,"#DCDCDC");
          this.showContents();
      })
    }

    // handleClickAxios(event) {  
    //   axios.get('https://reqres.in/api/unknown')
    //     .then((response) => {
    //       console.log(response);
    //       _assignValues(response);
    //     })
    //   }

    _assignValues(obj,color){
        obj.data.map(element => this.table.push({rowValue:element.name,fontColor:element.color,rowColor:color}));
        this.table=[...this.table];
    }
   
    handleInputEvent(event, other) {
        
        console.log("log:"+event.detail.inputPulses);
        this.header = event.detail.inputPulses + other;
      }
}
customElements.define('container-course', ContainerCourse);