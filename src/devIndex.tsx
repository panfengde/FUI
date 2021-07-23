import React from "react";
import ReactDOM from "react-dom";
//import React, {useState, useEffect, useRef} from "react"
import "normalize.css"
import 'component/index'




const {useState, useEffect, useRef} = React;

const App = () => {
    const inputEl = useRef(null);
    let [txt, setTxt] = useState("13344");
    useEffect(() => {
        setTimeout(() => {
            setTxt("hhhhh");
        }, 1000);
        console.log(inputEl.current)
    }, []);
    return (<div>
        <button-f>
            11111
        </button-f>
    </div>)
};

document.body.innerHTML = `<div id="root">1111</div>`;

ReactDOM.render(<App/>, document.querySelector("#root"));




