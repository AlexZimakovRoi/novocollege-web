import React from "react";
import './userInfo.css'
import { userInfo } from "../../../store/store";

export default class UserInfo extends React.Component {
    render() {
        return (
            <main className="user-main page">
                {userInfo.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="course-container">
                        <div className="info-course">
                            <p>{data.Param}</p>
                            <p>{data.infoParam}</p>
                        </div>
                        <div className="action-course">
                            <button className="action-button">{data.Update}</button>
                        </div>
                    </div>
                ))}
            </main>
        );
    }
}