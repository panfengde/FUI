import React, {useState, useRef} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

interface checkboxGroupType {
    value:string
}

function CheckboxGroup(props: checkboxGroupType) {
    return <div className="checkboxs">
        <slot/>
    </div>
}

class CheckboxGroup_f extends Container {
    value: Set<string>;

    constructor() {
        super();
        this.createBlockContainer();
        this.value = new Set();
    }

    changeValue(v:string) {
        if (this.value.has(v)) {
            this.value.delete(v)
        } else {
            this.value.add(v)
        }
        //console.log(this.value)
    }

    willMount() {
        let _this = this;
        createStyle(style, this.shadow);
        this.container.onclick = (e:any) => {
            let node = e.path.find((e:any) => e.nodeName === "CHECKBOX-F");
            if (node) {
                this.changeValue(node.getAttribute("value"));
            }
        };
     /*   let a = this.getAttribute("getDom");
        console.log(typeof a);
        console.log(a);*/
        ReactDOM.render(<CheckboxGroup value={this.getAttribute("value")}/>, this.container);

    }
}

export default CheckboxGroup_f;

