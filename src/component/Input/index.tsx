import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import container from "component/container"


interface inputType {

}

function Input() {

    const myFunction = () => {
        if (window.event && (window.event as KeyboardEvent).keyCode === 13) {
            window.event.returnValue = false;
        }
    };
    return <div id="title" className="input" contentEditable placeholder="请输入内容"
                onKeyDown={myFunction}

    />
}

class input_f extends container {
    constructor() {
        super();
        this.createInlineBlockContainer()
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });

        ReactDOM.render(<Input/>, this.container);
    }
};


export default input_f;

