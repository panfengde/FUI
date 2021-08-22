import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

interface inputType {

}

function Input() {
    const myFunction = () => {
        if (window.event && (window.event as KeyboardEvent).keyCode === 13) {
            window.event.returnValue = false;
        }
    };
    return <div id="title" className="input" contentEditable placeholder="请输入内容"
                onKeyDown={myFunction}/>
}

class input_f extends Container {
    constructor() {
        super();
        this.createBlockContainer()
    }

    willMount() {
        createStyle(style, this.shadow)
        ReactDOM.render(<Input/>, this.container);
    }
};


export default input_f;

