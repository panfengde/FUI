import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface styleType {
    position: "static" | "absolute" | "relative" | "fixed",
    left: number | string,
    top: number | string
}

interface propsType {
    style: styleType

}

function Group(props: propsType) {
    return <div style={{...props.style}}>
        <slot/>
    </div>
}

class group_f extends Container {
    constructor() {
        super();
        this.state = {
            style: {
                position: "static",
                right: 0,
                top: 0
            }
        }
        this.createBlockContainer();
    }

    render() {
        ReactDOM.render(<Group style={this.state.style}/>, this.container);
    }

    willMount() {
        import('assets/__animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        
        this.render()
    }
}


export default group_f