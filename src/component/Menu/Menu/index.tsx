import React, {useState, useEffect, useRef} from "react"
import ReactDOM from "react-dom"
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface MenuTypes {
    chooseValue: null | string
}

function Menu() {
    return <div>
        <slot/>
    </div>
}

class Menu_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            chooseValue: null
        };
    }

    render() {
        ReactDOM.render(<Menu/>, this.container);
    }


    listenItemChoose() {
        this.container.onclick = (e: any) => {
            //MouseEvent<HTMLDivElement>
            let node = e.path.find((e: any) => e.nodeName === "MENU-ITEM-F");

            if (node) {
                this.setState({
                    chooseValue: node.state.value
                });
                this.setChildProps({chooseValue: node.state.value});
                e.stopPropagation();

            }
            /* if (e.target.nodeName === "OPTION-F") {
                 this.setTxt(e.target);
                 this.toggle();
                 this.render()
             }*/
        };
    }

    willMount() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        
        this.render();
        this.setChildProps({chooseValue: this.state.chooseValue});
        this.listenItemChoose();
    }
}

export default Menu_f;
