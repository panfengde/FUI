import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"


function Option() {
    return <div className="Option">
        <slot/>
    </div>
}

class option_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
    }

    render() {
        ReactDOM.render(<Option/>, this.container);
    }

    connectedCallback() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.render();

    }
}


export default option_f;

