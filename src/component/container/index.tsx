import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import {createStyle, createLink} from "src/tools";

//
interface stateType {
    [key: string]: any
}

//setState设置数据
interface setStateType {
    [key: string]: any
}


class BlockContainerInline extends HTMLElement {
    shadow: ShadowRoot;
    container: HTMLElement;
    state: stateType;

    constructor() {
        super();
        this.state = {};
    }

    createBlockContainer() {
        this.shadow = this.attachShadow({mode: 'closed'});
        this.container = document.createElement('div');
        this.shadow.append(this.container);
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        return this.container;
    }

    createInlineBlockContainer() {
        this.shadow = this.attachShadow({mode: 'closed'});
        this.container = document.createElement('div');
        this.container.style.display = "inline-block";
        this.shadow.append(this.container);
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        return this.container;
    }

    setState(data: setStateType) {
        this.state = {...this.state, ...data};
        this.render && this.render();
    }

    connectedCallback() {
        // 在元素被添加到文档之后，浏览器会调用这个方法
        //（如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
    }

    /*
        disconnectedCallback() {
            // 在元素从文档移除的时候，浏览器会调用这个方法
            // （如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
        }

        static get observedAttributes() {
            return [/!* 属性数组，这些属性的变化会被监视 *!/];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            // 当上面数组中的属性发生变化的时候，这个方法会被调用
        }

        adoptedCallback() {
            // 在元素被移动到新的文档的时候，这个方法会被调用
            // （document.adoptNode 会用到, 非常少见）
        }

        static get observedAttributes() { // (3)
            return ["className"];
        }

        attributeChangedCallback(name, oldValue, newValue) { // (4)

        }

        setOption(data, callback) {

        }

        */

    render() {

    }


}


export default BlockContainerInline;
