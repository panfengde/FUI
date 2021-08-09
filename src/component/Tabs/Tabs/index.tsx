import React, {useRef, useEffect} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface tabType {
    name: string,
    key: string
}

interface propsType {
    chooseKey: string,
    content: string | number,
    tabs: Array<tabType>,
    chooseTab: (e: any) => void,

}

function Tabs(props: propsType) {
    const contentRef = useRef(null);
    useEffect(() => {
        debugger
        console.log(contentRef.current.assignedSlot)
    }, [])
    //assignedSlot
    return <div>
        <p>
            {props.tabs.map((obj) => <span
                onClick={() => {
                    props.chooseTab(obj.key)
                }}
                key={obj.key}>
                {obj.name}
            </span>)}
        </p>
        <div ref={contentRef}>
            <slot name={props.chooseKey}/>
        </div>
    </div>
}

class tabs_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            tabs: [
                {name: "one", key: "one"},
                {name: "two", key: "two"}
            ] as Array<tabType>,
            chooseKey: "",
            content: ""
        }
    }

    render() {
        ReactDOM.render(<Tabs
            chooseTab={this.chooseTab.bind(this)}
            tabs={this.state.tabs}
            chooseKey={this.state.chooseKey}
            content={this.state.content}/>, this.container);
    }

    listenChooseTab() {
        this.addEventListener("chooseKey", (key: any) => {
            this.setState({
                chooseKey: key
            })
        })
    }

    chooseTab(key: string) {
        this.doAction("chooseKey", key)
    }

    addTab(tab: tabType) {
        //this.state.tabs.
    }


    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.setState({
            //content: this.getAttribute("content"),
        })
        // 插槽能被添加/删除/代替
        this.listenChooseTab();
        this.render();

    }

}

export default tabs_f