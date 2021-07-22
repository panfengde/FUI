import React, {useState, useRef} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "../../tools";
import container from "component/container"

function Selelct(props) {
    return <div className="select">
        <div className="chooseValue" onClick={props.toggle}>
            <span>{props.txt}</span>
            <span>▽</span>
        </div>
        {props.show && <div className="optionBox a-fadein">
            <slot/>
        </div>}
    </div>
}

class select_f extends container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.choose = undefined;
        this.txt = null;
        this.show = false;
    }

    setTxt(node) {
        if (node) {
            this.txt = node.getAttribute("txt");
        }
    }

    toggle() {
        this.show = !this.show;
        this.render();
    }

    render() {
        ReactDOM.render(<Selelct value={this.choose}
                                 show={this.show}
                                 txt={this.txt}
                                 toggle={this.toggle.bind(this)}/>, this.container);
    }

    connectedCallback() {
        let _this = this;
        import('assets/animation.link').then((obj) => {
            //console.log(obj)
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow);
        });
        this.setTxt(this.shadow.querySelector(`slot[value="${this.choose}"]`));
        this.container.onclick = (e) => {
            let node = e.path.find((e) => e.nodeName === "OPTION-F");
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

