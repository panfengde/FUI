import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "../../tools";
import container from "component/container"


function Button() {

    return <div className="a-bounce button" onClick={() => {
        console.log(111)
    }}>
        <slot/>
    </div>
}

class button_f extends container {
    constructor() {
        super();
        this.createInlineBlockContainer()
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            //console.log(obj)
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });

        ReactDOM.render(<Button/>, this.container);
    }
}

export default button_f;

