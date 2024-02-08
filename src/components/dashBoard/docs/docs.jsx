import React from "react";
import NanMessage from "../../nanMessage/nanMessage";
import './docs.css'

class Docs extends React.Component {
    render() {
        return (
            <main className="docs-main page">
                <NanMessage nanMess='Сохраненные документы отсутствуют' />
                <button className="add-docs">Добавить</button>
            </main>
        )
    }
}

export default Docs