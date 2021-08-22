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
        this.createBlockContainer();
        this.state = {
            content: ""
        }
    }

    render() {
        ReactDOM.render(this.state.content, this.container);
    }

    willMount() {
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