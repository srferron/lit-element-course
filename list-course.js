import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class ListCourse extends LitElement {

    static get properties() { 
        return { 
            table: { type: String },
        };
    }

    
    constructor() {
        super();
        this.table = Array.from(new Array(6), (x, i) => "test data " + i);
        this.table.map((item) => console.log(item));
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
        if (this.table === undefined) {
            throw new Error('La propiedad rows no ha sido definida.');
        }
        return this.table.map((cell, index)=> html`<tr style="background:${(index % 2 === 0 ? "#CCC" : "#FFF")}"><td>${cell}</td></tr>` );
    }
}

customElements.define('list-course', ListCourse); 