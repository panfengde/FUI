import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface bread{
    title:string
}

interface propsType {
    data:Array<bread>,
}

function BreadCrumb(props:propsType) {
    return <div className="breadCrumb">
        {props.data.map((obj, index, arr) => {
            if (index !== arr.length - 1) {
                return <span key={index}>
                <span className="bread">{obj.title}</span>
                <span>/</span>
            </span>
            } else {
                return <span key={index}>
                <span className="bread">{obj.title}</span>
            </span>
            }

        })}
    </div>
}

class breadCrumb_f extends Container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            data: [
                {title: "hello", src: "a"},
                {title: "hello", src: "b"},
            ]
        }
    }

    render() {
        ReactDOM.render(<BreadCrumb data={this.state.data}/>, this.container);
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

export default breadCrumb_f;

