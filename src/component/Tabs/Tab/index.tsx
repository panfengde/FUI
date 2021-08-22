import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface propsType {
    name?: string
}
function Tab(props: propsType) {
    return <div slot={props.name}>
        <slot name="content"/>
    </div>
}
class tab_f extends Container {
    constructor() {
        super();
        this.createInlineBlockContainer();
        this.state = {}
    }
    render() {
        ReactDOM.render(<Tab name={this.state.name}/>, this.container);
    }
    willMount() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.setState({
            name: this.getAttribute("name")
        })

        this.render();
    }

}

export default tab_f