import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

function Row() {
    return <div className="rowBox">
        <slot/>
    </div>
}

class row_f extends Container {
    constructor() {
        super();
        this.createBlockContainer()
    }

    render() {
        ReactDOM.render(<Row/>, this.container);
    }

    willMount() {
        createStyle(style, this.shadow);
        this.render();
    }
}

export default row_f;

