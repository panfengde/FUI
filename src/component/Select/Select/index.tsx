import React, {useState, useRef} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

interface propsType {
    toggle: () => void;
    txt: string,
    show: boolean,
    value: undefined | string;
}

function Select(props: propsType) {
    return <div className="select">
        <div className="chooseValue" onClick={props.toggle}>
            <span>{props.txt}</span>
            <span>▽</span>
        </div>
        {props.show && <div className="optionBox">
            <slot/>
        </div>}
    </div>
}

class select_f extends Container {
    choose: undefined | string;
    txt: null | string;
    show: boolean;


    constructor() {
        super();
        this.createBlockContainer();
        this.choose = undefined;
        this.txt = null;
        this.show = false;
    }

    setTxt(node: HTMLElement) {
        if (node) {
            this.txt = node.getAttribute("txt");
        }
    }

    toggle() {
        this.show = !this.show;
        this.render();
    }

    render() {
        ReactDOM.render(<Select value={this.choose}
                                show={this.show}
                                txt={this.txt}
                                toggle={this.toggle.bind(this)}/>, this.container);
    }

    willMount() {
        let _this = this;
        createStyle(style, this.shadow);

        this.setTxt(this.shadow.querySelector(`slot[value="${this.choose}"]`));

        this.container.onclick = (e: any) => {
            //MouseEvent<HTMLDivElement>
            let node = e.path.find((e: any) => e.nodeName === "OPTION-F");
            if (node) {
                this.setTxt(node);
                this.toggle();
                this.render();
                e.stopPropagation()
            }
            /* if (e.target.nodeName === "OPTION-F") {
                 this.setTxt(e.target);
                 this.toggle();
                 this.render()
             }*/
        };
        this.render()
    }
}


export default select_f;

