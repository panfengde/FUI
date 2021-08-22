import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'
interface colType {
}

function Col(props: colType) {
    return <slot/>
}

class col_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            span: 1
        }
    }

    render() {
        this.container.className = this.state.span ? ("col-" + this.state.span) : "col-1";
        this.container.style.height = "100%";
        this.container.style.padding = "2px";
        ReactDOM.render(<Col/>, this.container);
    }

    willMount() {
        createStyle(style, this.shadow);
        this.setState({
            span:this.getAttribute("span")
        })
        this.render();
    }
}

export default col_f;

