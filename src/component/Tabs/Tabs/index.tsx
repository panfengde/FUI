import React, {useRef, useState, useEffect} from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"


interface propsType {
    chooseSlot: string,
    tabs: Array<string>,
    chooseTab: (e: any) => void,

}

function Tabs(props: propsType) {
    const margin = 12;
    const padding = 12;
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(0)
    const [tabObj, SetTabObj] = useState([])

    const contentRef = useRef(null);
    const tabTitleClick = (thisObj: any, tabObj: Array<any>, index: number) => {
        setWidth(thisObj.ref.clientWidth + padding * 2);
        let left = tabObj.slice(0, index).reduce((origin, obj) => {
            return origin + obj.ref.clientWidth + margin * 2;
        }, 0);
        setLeft(left);
        props.chooseTab(thisObj.name)
    };

    useEffect(() => {
        SetTabObj(props.tabs.map((name) => {
            return {
                name: name,
                ref: null
            }
        }))
    }, [props.tabs]);

    //assignedSlot
    return <div className="tabs">
        <div className="tabsTitle">
            {tabObj.map((obj: any, index) => <span
                className="tabs-tab"
                onClick={() => {
                    tabTitleClick(obj, tabObj, index)
                }}
                ref={(dom) => obj.ref = dom}
                key={obj.name}
                dangerouslySetInnerHTML={{__html: obj.name}}
            />)}
            <span className="chooseBar" style={{left, width}}/>
        </div>
        <div ref={contentRef}>
            <slot name={props.chooseSlot}/>
        </div>
    </div>
}

class tabs_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            tabs: [] as Array<string>,
            chooseSlot: null,
            defaultChooseSlot: null
        }
    }

    update = () => {
        this.getTabsInfo();
    }


    render() {
        ReactDOM.render(<Tabs
            chooseTab={this.chooseTab.bind(this)}
            tabs={this.state.tabs}
            chooseSlot={this.state.chooseSlot}
        />, this.container);
    }

    listenChooseTab() {
        this.addEventListener("chooseSlot", (event: any) => {
            this.setState({
                chooseSlot: event.detail
            })

        })
    }

    chooseTab(key: string) {
        //
        this.doAction("chooseSlot", key)
    }

    getTabsInfo() {
        let tads: Array<string> = [];
        this.childNodes.forEach((node: any) => {
            if (node.nodeName === "TAB-F") {
                tads.push(node.getAttribute("slot"))
            }
        });

        this.setState({
            chooseSlot: tads[0],
            tabs: tads
        });
    }

    willMount() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        
        // 插槽能被添加/删除/代替
        this.listenChooseTab();
        this.render();
    }

    didMount() {
        this.getTabsInfo();
    }

}

export default tabs_f