import React from "react";
import { messageArr } from "../../store/store";
import { NavLink, Outlet } from "react-router-dom";

class Messanger extends React.Component {
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
                    <section className="message-list">
                        {messageArr.map(data => (
                            <NavLink key={data.id} to={'0' + data.id} className="message-box">
                                <div id={data.id} className="message-title">
                                    <img className="message-image" src="#" alt="NaN" />
                                    <div className="message-main">
                                        <div className="message-sender-info">
                                            <p className="message-sender-p">{data.nameLesson}</p>
                                            <h1 className="message-sender-h1">{data.userName}</h1>
                                        </div>
                                        <div className="message-text-div">
                                            <p className="message-category-p">{data.messageCategory}</p>
                                            {/* <p className="massage-text-p">{data.messageText}</p> */}
                                        </div>
                                    </div>
                                    <div className="message-time-box">
                                        <p className="message-time">{data.messageTime}</p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </section>
                </div>
                <Outlet />
            </main>
        )
    }
}

export default Messanger;