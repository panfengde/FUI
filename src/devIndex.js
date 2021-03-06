import 'component/index'
import ReactDOM from 'react-dom';
import React, {useState, useEffect, useRef} from "react"
import "normalize.css"

function App() {
    const inputEl = useRef(null);
    let [txt, setTxt] = useState("13344")
    useEffect(() => {
        setTimeout(() => {
            setTxt("hhhhh");
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


    </div>
}

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
    ReactDOM.render(<App/>, document.querySelector("#root"));
});

setTimeout(() => {
    document.querySelector("#but").setState({
        data: [
            {title: "hello11", src: "a"},
            {title: "hello22", src: "b"},
            {title: "hello33", src: "b"},
        ]
    })
}, 2000);







