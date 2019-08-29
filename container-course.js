import { LitElement, html, css } from 'lit-element';

import './input-course.js';
import './h1-course.js';
import './list-course.js';
// import './css-component-2.js';
import {CSSComponent2} from  './css-component-2.js';
import './combo-course.js';
import './my-element.js';

class ContainerCourse extends LitElement {
    
  static get properties() { 
        return { 
          header: { type: String },
          table: { type: Array },
          css: {type: String}
        };
      }
      
      constructor() {
        super();
        this.table = [];
        CSSComponent2.append();
      }
    render() {
        return html`
        

        <input-course @input-pulse="${(event) => this.handleInputEvent(event, '')}" @input-change="${(event) => this.handleChangeEvent(event)}"></input-course>
        <h1-course header="${this.header}"></h1-course>
        
        <span>
          <h2>Issue 5</h2>
          <list-course .table="${this.table}"></list-course>
        </span>

        <span>
          <h2>Two CSS</h2>
          <!-- <css-component-1></css-component-1>
          <css-component-2></css-component-2> -->
          <!-- <combo-course @combo-change="${(event) => this.handleComboChangeEvent(event)}"></combo-course> -->
          <my-element></my-element>
        </span>
        `;
    }
    
    handleComboChangeEvent(event) {   
      console.log("log css:"+event.detail.comboChange);
      this.css=event.detail.comboChange;
      var sheet = document.querySelector('container-course').shadowRoot.querySelector('css-component-2').shadowRoot.styleSheets[0];
  
      this.adoptedStyleSheets=document.querySelector('container-course').shadowRoot.querySelector('css-component-2').shadowRoot.styleSheets;

      var sheet2=document.adoptedStyleSheets;
      var sheet3=document.styleSheets;
      var sheet4=document.querySelector('container-course').shadowRoot.querySelector('css-component-2').shadowRoot.styleSheets;
      debugger
      var rules=sheet.cssRules;
      

      //styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
      const asheet = new CSSStyleSheet();
      
      for (var i = 0; i < rules.length; i++) {
        var rule=rules[i];
        var selector=rule.selectorText;
        var style=rule.style;
        var cssText=style.cssText;
        debugger
      }
      asheet.insertRule();
      document.adoptedStyleSheets = [asheet];
      debugger
      var el2 = el.shadowRoot.querySelector('css');
      debugger
    }

     addStylesheetRules (rules) {
      var styleEl = document.createElement('style');
    
      // Append <style> element to <head>
      document.head.appendChild(styleEl);
    
      // Grab style element's sheet
      var styleSheet = styleEl.sheet;
    
      for (var i = 0; i < rules.length; i++) {
        var j = 1, 
            rule = rules[i], 
            selector = rule[0], 
            propStr = '';
        // If the second argument of a rule is an array of arrays, correct our variables.
        if (Array.isArray(rule[1][0])) {
          rule = rule[1];
          j = 0;
        }
    
        for (var pl = rule.length; j < pl; j++) {
          var prop = rule[j];
          propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
        }
    
        // Insert CSS Rule
        styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
      }
    }

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