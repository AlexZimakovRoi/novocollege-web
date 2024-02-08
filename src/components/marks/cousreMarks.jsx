import { Component } from 'react'
import { courseMarks } from '../../store/store'
import './marks.css'

class CousreMarks extends Component {
    render() {
        return (
            <main className='page mark-page'>
                {courseMarks.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <li className='mark-container'>
                        <div className='info-course-container'>
                            <p>{data.startDate} - {data.endDate}</p>
                            <p>{data.name}</p>
                            <p className='info-course-p'>{data.nameTeacher}</p>
                        </div>
                        <div className='middle-mark-container'>
                            <p>ср. балл</p>
                            <p>10</p>
                        </div>
                        <div className='marks-container'>
                            {data.marks.map(el => (
                                // eslint-disable-next-line react/jsx-key
                                <div className='mark-card'>
                                    <p>{el.date}</p>
                                    <p>{el.mark}</p>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </main>
        )
    }
}

export default CousreMarks