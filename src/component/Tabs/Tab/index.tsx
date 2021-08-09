import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface propsType {
    content: string | number
}

function Tab(props: propsType) {
    return <div>
        <slot/>
    </div>
}

class tab_f extends Container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            content: ""
        }
    }

    render() {
        ReactDOM.render(<Tab content={this.state.content}/>, this.container);
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.render();

    }

}

export default tab_f