import ReactDOM from 'react-dom';
import React, {useState, useEffect, useRef} from "react"
import "./index"
import "./dev.less"

function _App() {
    const inputEl = useRef(null);
    const groupRef = useRef(null);
    let [txt, setTxt] = useState("13344");
    useEffect(() => {
        setTimeout(() => {
            setTxt("hhhhh");
            groupRef.current.setStyle({
                position: "absolute",
                top: 100,
                right: 100,
            })
        }, 1000);
        console.log(inputEl.current)
    }, []);
    return <div>
        <button-f draggable>
            {txt}
        </button-f>
        <div>分割线</div>
        <select-f>
            <option-f value="1" txt="1">
                <span style={{color: "red"}}>111</span>
            </option-f>
            <option-f value="2" txt="2">2</option-f>
        </select-f>
        <input-f/>
        <checkgroup-f
            ref={inputEl}
        >
            {
                [1, 2, 3].map((v) => <checkbox-f key={v} value={v}>{v} <span style={{color: "red"}}>{v}</span>
                </checkbox-f>)
            }
        </checkgroup-f>
        <breadcrumb-f/>

        <row-f>
            <col-f span="6">
                <div style={{backgroundColor: "red"}}>1111</div>

            </col-f>
            <col-f span="6">
                <button-f>------2-------</button-f>
            </col-f>
        </row-f>

        <row-f>
            <col-f span="6">
                <select-f>
                    <option-f value="1" txt="1">
                        <span style={{color: "red"}}>111</span>
                    </option-f>
                    <option-f value="2" txt="2">2</option-f>
                </select-f>
            </col-f>
            <col-f span="6">
                <select-f>
                    <option-f value="1" txt="1">
                        <span style={{color: "red"}}>111</span>
                    </option-f>
                    <option-f value="2" txt="2">2</option-f>
                </select-f>
            </col-f>
        </row-f>
        <drop-down-f>
            <button-f slot="placement">
                1111x111x11111x11111111x111111xxxx
            </button-f>
            <card-f>
                <drop-item-f>1</drop-item-f>
                <drop-item-f>2</drop-item-f>
            </card-f>
        </drop-down-f>
        <menu-f>
            <menu-item-f key="5" value="5">5</menu-item-f>
            <menu-item-f key="6" value="6">6</menu-item-f>
            <menu-item-f key="7" value="7">7</menu-item-f>
        </menu-f>
        <p>--------------</p>
        <menu-f>
            <sub-menu-f>
                <p slot="placement"> hello</p>
                <menu-item-f key="1" value="1">1</menu-item-f>
                <menu-item-f key="2" value="2">2</menu-item-f>
                <menu-item-f key="3" value="3">3</menu-item-f>
            </sub-menu-f>
            <menu-item-f key="4" value="4">4</menu-item-f>
            <sub-menu-f>
                <p slot="placement"> hello</p>
                <menu-item-f key="5" value="5">5</menu-item-f>
                <menu-item-f key="6" value="6">6</menu-item-f>
                <menu-item-f key="7" value="7">7</menu-item-f>
            </sub-menu-f>
        </menu-f>
        <tips-f>11111</tips-f>
        <close-f/>
        <row-f>
            <col-f span="3">
                <popover-f type="right">
                    <div slot="popContent">
                        <p style={{width: 70}}>内容</p>
                    </div>
                    <span style={{border: "1px solid black"}}>top</span>
                </popover-f>
            </col-f>

            <col-f span="3">
                <popover-f type="top">
                    <div slot="popContent">
                        <p style={{width: 100}}>内容</p>
                    </div>
                    <span style={{border: "1px solid black"}}>right</span>
                </popover-f>
            </col-f>

            <col-f span="3">
                <popover-f type="bottom">
                    <div slot="popContent">
                        <p>1111111</p>
                        <p>222</p>
                        <p>33333</p>
                    </div>
                    <span style={{border: "1px solid black"}}>bottom</span>
                </popover-f>
            </col-f>

            <col-f span="3">
                <popover-f type="left">
                    <div slot="popContent">
                        <div>内容</div>
                    </div>
                    <span style={{border: "1px solid black"}}>left</span>
                </popover-f>
            </col-f>

        </row-f>
        <txt-f content="hello world"/>
        {/*<img-f/>*/}
        <tabs-f>
            <tab-f slot="<button-f>111</button-f>">
                <div slot="title">one</div>
                <div slot="content">
                    <p style={{color: "red"}}>1111</p>
                    <p style={{color: "yellow"}}>xxxxx</p>
                </div>
            </tab-f>
            <tab-f slot="two">
                <div slot="title">one</div>
                <div slot="content">
                    <p style={{color: "blue"}}>22222</p>
                    <p style={{color: "red"}}>xxxxx</p>
                </div>
            </tab-f>
            <tab-f slot="two3">
                <div slot="title">3333</div>
                <div slot="content">
                    <p style={{color: "blue"}}>3333</p>
                    <p style={{color: "red"}}>44444</p>
                </div>
            </tab-f>
        </tabs-f>

        <button-f>
            <button-f>
                1111
            </button-f>
            <button-f>
                2222
            </button-f>
        </button-f>
    </div>
};

function App() {
    const inputEl = useRef(null);
    let [src, setSrc] = useState("https://preview.qiantucdn.com/58pic/00/94/54/69E58PICU4kbtF67SRY15_PIC2018.jpg!w1024_new_small")
    // const groupRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            console.log(inputEl.current.attrSetDic())
            console.log(inputEl.current.observedAttributes)
            setSrc("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F4034970a304e251fae75ad03a786c9177e3e534e.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632319753&t=8bac1b3cbb4fa18d1e912ebc9571b6eb")
            //inputEl.current.animation = "animate__animated animate__jello2"
        }, 1400)

    }, []);

    return <div className="box">
        <button-f animation="animate__animated animate__jello">动画</button-f>
        <input-f draggable>按钮</input-f>
        <select-f animation="animate__animated animate__jello">
            <option-f value="1" txt="1">11111
            </option-f>
            <option-f value="2" txt="2">222222</option-f>
        </select-f>
        <checkgroup-f animation="animate__animated animate__jello">
            {
                [1, 2, 3].map((v) => <checkbox-f key={v} value={v}>{v}-hello
                </checkbox-f>)
            }
        </checkgroup-f>
        <div className="rowCol">
            <row-f animation="animate__animated animate__jello">
                <col-f span={6}>
                    <button-f>按钮</button-f>
                </col-f>
                <col-f span={6}>
                    <button-f>按钮</button-f>
                </col-f>
            </row-f>
        </div>
        <div className="rowCol">
            <row-f animation="animate__animated animate__jello">
                <col-f span={4}>
                    <button-f>按钮</button-f>
                </col-f>
                <col-f span={4}>
                    <button-f>按钮</button-f>
                </col-f>
                <col-f span={4}>
                    <button-f>按钮</button-f>
                </col-f>
            </row-f>
        </div>
        <img-f
            ref={inputEl}
            src={src}
            animation="animate__animated animate__jello"
        />
        <img-f animation="animate__animated animate__jello"
               src="https://preview.qiantucdn.com/58pic/01/02/70/18s58PICJYedx3p81cDn1_PIC2018.jpg!w1024_new_small"/>
        <img-f/>
    </div>
}

document.body.innerHTML = `<div id="root"> 
</div>`;

setTimeout(() => {
    ReactDOM.render(<App/>, document.querySelector("#root"));
});

// ▼▲▶◀

/*

document.body.innerHTML = `
<div id="root"></div>
<div>-----------------------</div>
 <button-f >1111</button-f>
 <card-f>
 <breadcrumb-f  id="but" />
</card-f>
<p>drop-down-f</p>
 <drop-down-f>
            <button-f slot="placement">
                1111x111x11111x11111111x111111xxxx
            </button-f>
            <card-f>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </card-f>
        </drop-down-f>
`;


<tab-f name="one" slot="one">
                111111
            </tab-f>
            <tab-f name="two" slot="two">
                22222222
            </tab-f>

setTimeout(() => {
    let but: FHTMLElement = document.querySelector("#but");
    but.setState({
        data: [
            {title: "hello11", src: "a"},
            {title: "hello22", src: "b"},
            {title: "hello33", src: "b"},
        ]
    })
}, 2000);
*/

setTimeout(() => {
    document.body.style.setProperty('--themeColor-FUI', 'green');
}, 3000);





