import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class ListCourse extends LitElement {

    static get properties() { 
        return { 
            table: { type: Array },
            row: {type: String},
        };
    }

    
    constructor() {
        super();
        
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
        if(typeof this.table!=='undefined'){
            this.table.push(this.row);
            return this.table.map((cell, index)=> html`<tr style="background:${(index % 2 === 0 ? "#CCC" : "#FFF")}"><td>${cell}</td></tr>` );
        } else this.table = [];
    }
}

customElements.define('list-course', ListCourse); 