import React, {useState, useRef} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import container from "component/container"

function DropDown(props) {
    function type() {
        switch (props.type) {
            case "topLeft":
                return "top-left";
            case "topRight":
                return "top-right";
            case "bottomRight":
                return "bottom-right";
            case "bottomLeft":
                return "bottom-left";
            case "default":
                return "bottom-left";
        }
    }

    return <div className="drop-down">
        <div className="chooseValue" onClick={props.toggle}>
            <slot name="placement"/>
        </div>
        {props.show && <div className={"drop-content " + type() + " a-fadein"}>
            <slot/>
        </div>}
    </div>
}

class dropDown_f extends container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            show: false,
            type: this.getAttribute("type")||"bottomLeft"
        }
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        ReactDOM.render(<DropDown
            type={this.state.type}
            show={this.state.show}
            toggle={this.toggle.bind(this)}/>, this.container);
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow);
        });
        this.container.onclick = (e) => {
            this.toggle();
            e.stopPropagation()
            /* let node = e.path.find((e) => e.nodeName === "OPTION-F");
             if (node) {
                 this.toggle();
                 e.stopPropagation()
             }*/
        };
        this.render()
    }
}

export default dropDown_f;

