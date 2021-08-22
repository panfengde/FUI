import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import png from "assets/img/hello.png";
import style from './index.wless'

interface propsType {
    src: string
}

function Img(props: propsType) {
    return <img  className="img" src={props.src} alt=""/>
}

class img_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            src: png
        }
    }

    render() {
        ReactDOM.render(<Img src={this.state.src}/>, this.container);
    }

    willMount() {
        createStyle(style, this.shadow)
        let src=this.getAttribute("src");
        if(src){
            this.setState({
                src: src,
            })
        }
        this.render()
    }

}

export default img_f