import React from "react";
import './courseList.css'
import { courseArr } from "../../../store/store";

class CourseList extends React.Component {
    render() {
        return (
            <main className="course-main page">
                {courseArr.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="course-container">
                        <div className="info-course">
                            <p>{data.categoryCousre}</p>
                            <p>{data.nameCourse}</p>
                        </div>
                        <div className="action-course">
                            <button className="action-button">Отменить регистрацию</button>
                            <button className="action-button">{data.shedule ? 'Убрать из расписания' : 'Добавить в расписание'}</button>
                        </div>
                    </div>
                ))}
            </main>
        )
    }
}

export default CourseList