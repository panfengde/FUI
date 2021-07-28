import React from "react";
import ReactDOM from "react-dom";
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface MenuItemType {
    choose: boolean,

}

function MenuItem(props: MenuItemType) {
    return <div className={props.choose ? "choose" : ""}>
        menu_item
        <slot/>
    </div>
}


class MenuItem_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            value: this.getAttribute("value"),
        };
    }

    render() {
        ReactDOM.render(<MenuItem choose={this.state.value === this.props.chooseValue}/>, this.container);
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.render();
        this.setState({
            value: this.getAttribute("value"),
        });
    }

}

export default MenuItem_f;
