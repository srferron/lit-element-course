import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class RouterLinksCourse extends LitElement {

  static get properties() { 
    return { 
      header: { type: String },
    };
  }


  render(){
    return html`
        <ul><span><a href="/components/lit-element-course/" @click="${this.linkClick}">Home</a></span></ul>
        <ul><span><a href="/xhtmlrequest" @click="${this.linkClick}">Xhtmlrequest</a></span></ul>
        <ul><span><a href="/fetch" @click="${this.linkClick}">fetch</a></span></ul>
    `;
  }


    linkClick(event) {
        //event.preventDefault();
        this.navigate(this.href);
    }

  handleClick(event,eventName){
    debugger
    const customEvent = new CustomEvent(eventName, {
        bubbles: true,
        composed: true
    });
    this.dispatchEvent(customEvent);
  }
}

// Register the new element with the browser.
customElements.define('router-links-course', RouterLinksCourse); 