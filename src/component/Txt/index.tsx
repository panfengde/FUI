import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

interface propsType {
    content: string | number
}


class txt_f extends Container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            content: ""
        }
    }

    willMount() {
        createStyle(style, this.shadow);
        this.setState({
            content: this.getAttribute("content"),
        });
        this.container.style.padding = "4px";
        this.container.innerHTML = "<slot><slot/>"
        //ReactDOM.render(<slot/>, this.container)
    }

}

export default txt_f