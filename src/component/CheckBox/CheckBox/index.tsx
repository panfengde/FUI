import React, {useState} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import container from "component/container"

interface checkboxType {
    choose: boolean
}

function Checkbox(props: checkboxType) {
    return <div className="checkbox">
        <div className={props.choose ? "chooseCtr choose" : "chooseCtr"}/>
        <slot/>
    </div>
}

class checkbox_f extends container {
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

    connectedCallback() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.render();
        (this.shadow.firstElementChild as HTMLElement).onclick = (e:any) => {
            this.toggle();
            console.log(e)
        }
    }
}


export default checkbox_f;

