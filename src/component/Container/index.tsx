import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import {createStyle, createLink} from "src/tools";
import style from './index.wless'
//import link from 'assets/animate.min.link';
import link from 'assets/animate.wless';


//
interface stateType {
    [key: string]: any
}

//setStyle设置数据
interface setStyleType {
    [key: string]: any
}

//setState设置数据
interface setStateType {
    [key: string]: any
}

//setState设置数据
interface slotPropsType {
    [key: string]: any
}

//插槽需要的Props
interface childPropsType {
    [key: string]: any
}


class BlockContainerInline extends HTMLElement {
    shadow: ShadowRoot;
    container: HTMLElement;
    state: stateType;
    props: slotPropsType;
    pendingRender: boolean;
    observerObj: MutationObserver;
    update?: () => void


    constructor() {
        super();
        this.state = {};
        this.props = {};
        this.pendingRender = false;
    }


    /*
    * 自定义的元素的生命周期
    * 即将开始挂在的生命周期
    * */
    willMount() {

    };

    didMount() {

    }

    /*
    * 卸载时执行的方法
    * */
    unMount() {

    };

    render() {
    };


    doRender() {
        //排队，避免重复的Render
        if (this.pendingRender) {
            return;
        }
        this.pendingRender = true;
        setTimeout(() => {
            this.render();
            this.pendingRender = false;
        });
    }

    createBlockContainer() {
        this.shadow = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.container.draggable = true;
        //this.container.className = "container"
        this.shadow.append(this.container);
        return this.container;
    }

    createInlineBlockContainer() {
        this.shadow = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.container.draggable = true;
        this.container.style.display = "inline-block";
        this.shadow.append(this.container);
        return this.container;
    }

    /**
     * 修改样式
     * @param style
     */
    setStyle(style: setStyleType) {
        this.state.style = {...this.state.style, ...style};
        this.doRender()

    }

    /**
     * 修改组件内部状态
     * @param data
     */
    setState(data: setStateType) {
        this.state = {...this.state, ...data};
        this.doRender()
    }

    /**
     * 修改组件外部传递的状态
     * @param props
     */
    setSlotProps(props: slotPropsType) {
        this.props && (this.props = {...this.props, ...props});
        this.doRender()
    }

    /**
     * 给子组件传递props
     * @param data
     */
    setChildProps(data: childPropsType) {
        this.childNodes.forEach((node: any) => {
            node.setSlotProps && node.setSlotProps(data);
            node.setChildProps && node.setChildProps(data);
        });
    }

    /**
     * 给组件定义从外部传入的事件
     * @param actType
     * @param callback
     */
    setAction(actType: string, callback?: () => void) {
        //document.addEventListener('test', event => alert(event.detail));
        this.addEventListener(actType, callback)
    }

    /**
     * 通过DOM形式触发组件内部事件
     * @param actType
     * @param detail
     */
    doAction(actType: string, detail?: any) {
        this.dispatchEvent(new CustomEvent(actType, {
            bubbles: true,
            composed: true,
            detail: detail
        }));
    }

    static get observedAttributes() { // (3)
        return ["animation"];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log("attributeChangedCallback-----", name, oldValue, newValue)
        this.container.className = this.getAttribute("animation")
        this.render();
    }

    //todo
    setDics() {
        return {
            fontSize: {
                type: "color",
                name: "字体",
                value: "他的曲直规则",//应该是个函数
            },

        }
    }


    /*
    * 监听当元素下面的插槽及其后背插槽的变化时
    * 变化时触发回调函数
    * */
    private connectedCallback(info: any) {
        //createLink(link, this.shadow)
        //todo 不应该使用style，应该使用link处理
        createStyle(link, this.shadow)
        createStyle(style, this.shadow)
        this.container.className = this.getAttribute("animation")
        //渲染，执行自元素的render
        this.willMount()
        //初次渲染完毕
        this.didMount()
        //监听自元素的变化
        this.observe();
        // 监听自元素的变化

    }

    private disconnectedCallback() {
        // 在元素从文档移除的时候，浏览器会调用这个方法
        // （如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用）
        this.unMount();
        //取消元素变化监听
        this.cancleObverse();
    }


    /*

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


    private observe() {
        /**
         * update是子类的方法
         * 描述子元素变化后的回调动作
         */
        if (this.update) {
            this.observerObj = new MutationObserver((mutations) => {
                this.update();
                console.log(mutations)
                /*mutations.forEach(function (mutation) {
                    //Detect <img> insertion
                    console.info('Node added: ', mutation.addedNodes[0])
                    if (mutation.addedNodes.length)
                        console.info('Node added: ', mutation.addedNodes[0])
                })*/
            })
            this.observerObj.observe(this, {
                childList: true,  // 观察目标子节点的变化，是否有添加或者删除
                attributes: true, // 观察属性变动
                subtree: false     // 观察后代节点，默认为 false
            })
        }

    }

    private cancleObverse() {
        if (this.update) {
            this.observerObj.disconnect();
        }
    }

}

/*const Container = new Proxy(BlockContainerInline, {
    apply(target, ctx, args){
        //console.log(arguments)
        //Reflect.apply(...arguments);
        console.log(target, ctx, args)
        return Reflect.apply(target, ctx, args);
    }
});*/

export default BlockContainerInline;
