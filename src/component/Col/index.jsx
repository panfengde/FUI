import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "../../tools";
import container from "component/container"


function Col(props) {
    return <slot/>
}

class col_f extends container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            span: 1
        }
    }

    render() {
        this.container.className = this.state.span ? ("col-" + this.state.span) : "col-1";
        ReactDOM.render(<Col span={this.state.span}/>, this.container);
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            //console.log(obj)
            createLink(obj.default, this.shadow)
        });

        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.render();
    }
}

export default col_f;

