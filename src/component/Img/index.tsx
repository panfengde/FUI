import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"
import png from "assets/img/hello.png";
import style from './index.wless'


interface propsType {
    src: string,
    style_f: {
        [key: string]: any
    }
}

function Img(props: propsType) {
    return <img style={props.style_f} className="img" src={props.src} alt=""/>
}

/**
 * 关于属性的字典
 */
const propsDic = [
    {
        type: "string",
        name: "图片地址",
        key: "src",
        valueRule: "他的曲直规则",//应该是个函数
    },
];
const obverseProps = propsDic.map((obj: any) => obj.key)

/**
 * 关于样式的字典
 */
const styleDic = [
    {
        type: "string",
        name: "边框",
        key: "border",
        valueRule: "他的曲直规则",//应该是个函数
    },
    {
        type: "string",
        name: "圆角",
        key: "borderRadius",
        valueRule: "曲直规则",//应该是个函数
    },
    {
        type: "string",
        name: "透明度",
        key: "opacity",
        valueRule: "曲直规则",//应该是个函数
    },
    {
        type: "string",
        name: "边距",
        key: "margin",
        valueRule: "取值规则",//应该是个函数
    },
];

class img_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
            src: png
        }
        this.style_f = {};
        this.propsDic = propsDic;
        this.styleDic = styleDic;
    }

    /* styleDic(): Array<string> {
        return ["border"]
    }*/

    //
    arrChangeCallback(name: string, oldValue: any, newValue: any) {
        switch (name) {
            case "src":
                this.setState({
                    src: newValue
                })
        }
    }

    static get observedAttributes() { // (3)
        return ["animation", ...obverseProps];
    }

    render() {
        ReactDOM.render(<Img src={this.state.src} style_f={this.style_f}/>, this.container);
    }

    willMount() {
        createStyle(style, this.shadow)
        let src = this.getAttribute("src");
        if (src) {
            this.setState({
                src: src,
            })
        }
        this.render()
    }

}

export default img_f