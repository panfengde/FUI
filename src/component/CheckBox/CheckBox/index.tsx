import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

interface checkboxType {
    choose: boolean
}

function Checkbox(props: checkboxType) {
    return <div className="checkbox">
        <div className={props.choose ? "chooseCtr choose" : "chooseCtr"}/>
        <slot/>
    </div>
}

class checkbox_f extends Container {
    choose: boolean

    constructor() {
        super();
        this.createInlineBlockContainer();
        this.choose = false
    }

    toggle() {
        this.choose = !this.choose;
        this.render();
    }

    render() {
        ReactDOM.render(<Checkbox choose={this.choose}/>, this.container);
    }

    willMount() {
        createStyle(style, this.shadow);
        this.render();
        (this.shadow.firstElementChild as HTMLElement).onclick = (e: any) => {
            this.toggle();
        }
    }
}

export default checkbox_f;

