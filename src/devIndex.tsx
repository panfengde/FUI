import ReactDOM from 'react-dom';
import React, {useState, useEffect, useRef} from "react"
import "./index"


function App() {
    const inputEl = useRef(null);
    const groupRef = useRef(null);
    let [txt, setTxt] = useState("13344");
    useEffect(() => {
        setTimeout(() => {
            setTxt("hhhhh");

            groupRef.current.setStyle({
                position:"absolute",
                top:100,
                right:100,
            })

        }, 1000);
        console.log(inputEl.current)
    }, []);
    return <div>
        <button-f>
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
        <p>row</p>
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

        <group-f ref={groupRef}>
            <txt-f content="hello world1"/>
            <txt-f content="hello world2"/>
            <close-f/>
        </group-f>
        <img-f/>

    </div>
}

document.body.innerHTML = `<div id="root"></div>`;

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





