import React ,{useRef,useEffect}from "react";
import ReactDOM from "react-dom"
import {createStyle, createLink} from "src/tools";
import Container from "component/Container"

interface tipsType {
    close: () => void
}

function Tips(props: tipsType) {
    const closeDom = useRef(null);
    useEffect(() => {
        closeDom.current.setAction("close",props.close)
    }, []);
    return <div className="info-panel-content">
        <div className="info-panel-triple"/>
        <div className="info-panel-triple-shadow"/>
        <div className="tipsContent">
            <slot/>
            <close-f
                ref={closeDom}
            />
        </div>
    </div>
}

class tips_f extends Container {
    constructor() {
        super();
        this.createBlockContainer();
        this.state = {
        };

    }

    render() {
        ReactDOM.render(<Tips close={this.close.bind(this)}/>, this.container);
    }

    close() {
        this.remove()
    }

    connectedCallback() {
        import('assets/animation.link').then((obj) => {
            createLink(obj.default, this.shadow)
        });
        import('./index.wless').then((obj) => {
            createStyle(obj.default, this.shadow)
        });
        this.render();
    }
}

export default tips_f;