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
    style_f: {
        [key: string]: any
    },
}

function Div(props: propsType) {
    return <div style={props.style_f}>
        <slot/>
    </div>
}
/**
 * 关于属性的字典
 */
const propsDic = [
    {
        type: "string",
        name: "类型",
        key: "type",
        valueRule: "他的曲直规则",//应该是个函数
    },
];
const obverseProps = propsDic.map((obj: any) => obj.key);

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
    {
        type: "string",
        name: "背景颜色",
        key: "backgroundColor",
        valueRule: "取值规则",//应该是个函数
    },
];

class div_f extends Container {
    constructor() {
        super();
        this.state = {
        }
        this.createBlockContainer();
        this.style_f = {};
        this.propsDic = propsDic;
        this.styleDic = styleDic;
    }

    render() {
        ReactDOM.render(<Div style_f={this.style_f}/>, this.container);
    }

    willMount() {
        this.render()
    }
}


export default div_f