import React from "react";
import { teachersArr } from "../../../store/store";

class YourTeachers extends React.Component {
    render() {
        return (
            <main className="all-teachers-main">
                <p className="all-teachers-heading">Полный список преподавтелей</p>
                {teachersArr.map(data => (
                    <div className="teachers-container">
                        <div className="info-teachers">
                            <div className="ava-teacher">

                            </div>
                            <div className="info-teachers-p">
                                <p>{data.subject}</p>
                                <p>{data.nameOfTeacher}</p>
                            </div>
                        </div>
                        <div className="action-teachers">
                            <button className="button-write-to">{data.writeTo}</button>
                        </div>
                    </div>
                ))}
            </main>
        );
    }
}

export default YourTeachers