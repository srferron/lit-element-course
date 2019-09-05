import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class ListCourse extends LitElement {

    static get properties() { 
        return { 
            table: { type: Array },
        };
    }

    
    constructor() {
        super();
        this.table = []

    }

    render(){
        return html`
        <table >
            <tr><th>header of the table</th></tr>
            ${this.templateRows}
        </table>
        `;
    }

    get templateRows() {
        return this.table.map((cell, index)=> html`<tr style="background:${cell.rowColor}"><td style="color:${cell.fontColor}">${cell.rowValue}</td></tr>` );
    }
}

customElements.define('list-course', ListCourse); 