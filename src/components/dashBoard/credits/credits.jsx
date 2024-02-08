import React from "react";
import NanMessage from "../../nanMessage/nanMessage";
import './credits.css'

class Credits extends React.Component {
    render() {
        return (
            <main className="credits-main page">
                <NanMessage nanMess='На данный момент зачеты отсутствуют (Зачетный период с 10.12.23!)' />
            </main>
        )
    }
}

export default Credits