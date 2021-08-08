import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"


interface propsType {
    content: string | number
}

function Txt(props: propsType) {
    return <span>{props.content}</span>
}

class txt_f extends Container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            content: ""
        }
    }

    render() {
        ReactDOM.render(<Txt content={this.state.content}/>, this.container);
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });

        this.setState({
            content: this.getAttribute("content"),
        })
        this.render()
    }

}

export default txt_f