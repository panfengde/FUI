import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface propsType {
    type?: string,
}

function Popover(props: propsType = {type: "top"}) {
    return (
        <div className="popAddress">
            <slot/>
            <div className={props.type + " popContentBox"}>
                <i className="triangle"/>
                <slot name="popContent"/>
            </div>
        </div>
    )
}


class popover_f extends Container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {
            type: "top"
        }
    }

    render() {
        ReactDOM.render(<Popover type={this.state.type}/>, this.container);
    }

    willMount() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        

        this.setState({
            type: this.getAttribute("type") || "top",
        })

        this.render()
    }
}

export default popover_f