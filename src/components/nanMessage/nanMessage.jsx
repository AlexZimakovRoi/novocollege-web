import React from "react";
import './nanMessage.css'

class NanMessage extends React.Component {
    render() {
        return (
            <div className="nan-container">
                <img className="nan-image" src="/image/nanMessage.svg" alt="" />
                <h1 className="nan-h1">{this.props.nanMess}</h1>
            </div>
        )
    }
}

export default NanMessage;