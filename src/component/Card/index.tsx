import React from "react"
import ReactDOM from 'react-dom';
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"


function Card() {
    return <div className="card">
        <slot/>
    </div>
}

class card_f extends Container {
    constructor() {
        super();
        this.createBlockContainer()
    }

    render() {
        ReactDOM.render(<Card/>, this.container);
    }

    willMount() {
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        
        this.render();

    }
}

export default card_f;

