import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import container from "component/container"


function Option() {
    return <div className="Option" >
        <slot/>
    </div>
}

class option_f extends container {
    constructor() {
        super();
        this.createBlockContainer();
    }

    connectedCallback() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        ReactDOM.render(<Option/>, this.container);

    }
}


export default option_f;

