import React from "react"
import ReactDOM from "react-dom"
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

//▼▲▶◀
interface SubMenu {
    show: boolean,
    toggle: () => void
}


function SubMenu(props: SubMenu) {
    return <div>
        <div className="sub_menu" onClick={props.toggle}>
            <div>
                <slot name="placement"/>
            </div>
            <span>{props.show ? "▲" : "▼"}</span>
        </div>
        {
            props.show && <div>
                <slot/>
            </div>
        }
    </div>
}


class SubMenu_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            show: false,
        }

    }

    toggle() {
        this.setState({show: !this.state.show})
    }

    render() {
        ReactDOM.render(<SubMenu
            toggle={this.toggle.bind(this)}
            show={this.state.show}/>, this.container);

    }

    willMount() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow);
        });

        //给子slot注入slot
        this.setChildProps({chooseValue: this.props.chooseValue});
        this.render()
    }

}


export default SubMenu_f;
