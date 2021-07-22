import React, {useState, useRef} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "../../tools";
import container from "component/container"

function CheckboxGroup(props) {
    return <slot/>
}

class CheckboxGroup_f extends container {
    constructor() {
        super();
        this.createInlineBlockContainer();

        this.value = new Set();
    }

    changeValue(v) {
        if (this.value.has(v)) {
            this.value.delete(v)
        } else {
            this.value.add(v)
        }
        console.log(this.value)
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
        this.container.onclick = (e) => {
            let node = e.path.find((e) => e.nodeName === "CHECKBOX-F");
            if (node) {
                this.changeValue(node.getAttribute("value"));
            }
        };
        let a = this.getAttribute("getDom");
        console.log(typeof  a);
        console.log(a);
        ReactDOM.render(<CheckboxGroup value={this.getAttribute("value")}/>, this.container);

    }
}

export default CheckboxGroup_f;

