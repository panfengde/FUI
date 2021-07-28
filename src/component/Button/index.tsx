import React from "react";
import ReactDOM from "react-dom";
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"


function Button() {
    return <div className="a-bounce button" onClick={() => {
        console.log("click")
    }}>
        <slot/>
    </div>
}

class Button_f extends Container {

    constructor() {
        super();
        this.createInlineBlockContainer()
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            //console.log(obj)
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });

        ReactDOM.render(<Button/>, this.container);
    }

}
export default Button_f;

