import React from "react";
import ReactDOM from "react-dom";
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import style from './index.wless'

console.log(style);

function Button() {
    return <div className="button ripple">
        <slot/>
    </div>
}

class Button_f extends Container {
    constructor() {
        super();
        this.createBlockContainer()
    }

    willMount() {

        createStyle(style, this.shadow)
        /*this.container.addEventListener("click", () => {
            console.log("----");
        })*/
        ReactDOM.render(<Button/>, this.container);
    }

}

export default Button_f;

