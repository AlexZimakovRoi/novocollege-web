import { Component } from 'react'
import { sheduleArr } from '../../../store/store'

export default class SheduleContainer extends Component {
    render() {
        return (
            <section className='shedule-container'>
                {sheduleArr.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="shedule-day-container">
                        <h1 id={'day' + data.id} className="shedule-day">{data.day}</h1>
                        <ol className="shedule-cards-container">
                            {data.lessons.map((el, i) => (
                                // eslint-disable-next-line react/jsx-key
                                <li className="shedule-card">
                                    <div className="shedule-time">
                                        <p>{++i}</p>
                                        <p>{el.time}</p>
                                    </div>
                                    <p className="shedule-name-lesson">{el.lesson}</p>
                                    <p className="shedule-name-teacher">{el.teacher}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </section>
        )
    }
}
