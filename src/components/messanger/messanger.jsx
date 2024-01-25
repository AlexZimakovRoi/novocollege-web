import React from "react";
import './messanger.css'

class Messanger extends React.Component {
    messageArr = [{ id: 1, userName: 'Иванова Ивановна', nameLesson: 'Русский язык', messageCategory: 'Ответ на домашнее задание:', messageTime: '12:10', messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt erat risus, id gravida lacus mollis eu. Duis in est quis lorem vehicula accumsan. Etiam risus erat, iaculis non erat ut, commodo suscipit diam. Nam sagittis consectetur elit eu porttitor. Suspendisse molestie porttitor fringilla. Nunc vel augue eros. Vestibulum posuere rutrum velit rutrum cursus. Vivamus aliquet velit sed tellus fermentum ultricies. Praesent elementum augue ut venenatis vehicula. Nulla facilisi. Aliquam egestas eros eu tortor accumsan congue. Vestibulum sollicitudin sapien mauris.', userImage: '' },
    { id: 2, userName: 'Иванова Ивановна', nameLesson: 'Русский язык', messageCategory: 'Ответ на домашнее задание:', messageTime: '12:10', messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt erat risus, id gravida lacus mollis eu. Duis in est quis lorem vehicula accumsan. Etiam risus erat, iaculis non erat ut, commodo suscipit diam. Nam sagittis consectetur elit eu porttitor. Suspendisse molestie porttitor fringilla. Nunc vel augue eros. Vestibulum posuere rutrum velit rutrum cursus. Vivamus aliquet velit sed tellus fermentum ultricies. Praesent elementum augue ut venenatis vehicula. Nulla facilisi. Aliquam egestas eros eu tortor accumsan congue. Vestibulum sollicitudin sapien mauris.', userImage: '' },
    { id: 3, userName: 'Иванова Ивановна', nameLesson: 'Русский язык', messageCategory: 'Ответ на домашнее задание:', messageTime: '12:10', messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt erat risus, id gravida lacus mollis eu. Duis in est quis lorem vehicula accumsan. Etiam risus erat, iaculis non erat ut, commodo suscipit diam. Nam sagittis consectetur elit eu porttitor. Suspendisse molestie porttitor fringilla. Nunc vel augue eros. Vestibulum posuere rutrum velit rutrum cursus. Vivamus aliquet velit sed tellus fermentum ultricies. Praesent elementum augue ut venenatis vehicula. Nulla facilisi. Aliquam egestas eros eu tortor accumsan congue. Vestibulum sollicitudin sapien mauris.', userImage: '' },
    { id: 4, userName: 'Иванова Ивановна', nameLesson: 'Русский язык', messageCategory: 'Ответ на домашнее задание:', messageTime: '12:10', messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt erat risus, id gravida lacus mollis eu. Duis in est quis lorem vehicula accumsan. Etiam risus erat, iaculis non erat ut, commodo suscipit diam. Nam sagittis consectetur elit eu porttitor. Suspendisse molestie porttitor fringilla. Nunc vel augue eros. Vestibulum posuere rutrum velit rutrum cursus. Vivamus aliquet velit sed tellus fermentum ultricies. Praesent elementum augue ut venenatis vehicula. Nulla facilisi. Aliquam egestas eros eu tortor accumsan congue. Vestibulum sollicitudin sapien mauris.', userImage: '' }]

    render() {
        return (
            <main className="messanger">
                <div className="messanger-list">
                    <div className="messages-info">
                        <div className="messanges-number">
                            <h1 className="messages-h1">Сообщения</h1>
                            <span className="messanges-number-span">4</span>
                        </div>
                        <button className="messanges-button-add">+</button>
                    </div>
                    <div className="messange-filter">
                        <select defaultValue='value1' className="message-select-filter" name="select-filter">
                            <option className="s123" value="value1">Все</option>
                            <option value="value2">Не прочитаные</option>
                            <option value="value3">Прочитаные</option>
                        </select>
                    </div>
                    <div className="message-list">
                        {this.messageArr.map(data => (
                            <button className="message-box">
                                <div id={data.id} className="message-title">
                                    <img className="message-image" src="#" alt="NaN" />
                                    <div className="message-main">
                                        <div className="message-sender-info">
                                            <p className="message-sender-p">{data.nameLesson}</p>
                                            <h1 className="message-sender-h1">{data.userName}</h1>
                                        </div>
                                        <div className="message-text-div">
                                            <p className="message-category-p">{data.messageCategory}</p>
                                        </div>
                                    </div>
                                    <div className="message-time-box">
                                        <p className="message-time">{data.messageTime}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="messanger-inspection-ls">
                    <div className="messanger-name">
                        <p className="message-name-1"></p>
                        <h1 className="message-name-2"></h1>
                    </div>
                    <div className="massnnger-time"></div>
                    <div className="massnnger-text-ls"></div>
                    <div className="massnnger-answer">
                        <h1 className="Ответить..."></h1>
                    </div>
                    <div className="massnnger-color-team"></div>
                </div>
            </main>
        )
    }
}

export default Messanger;