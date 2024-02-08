import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { messageArr } from '../../store/store';

export default function MessangerBox() {
    const { id } = useParams();

    const inp = useRef();

    const CheckInput = () => {
        const text = document.getElementById('text');
        const inpRez = inp.current.value.length;
        let rowsOfNumber = 1;
        if (inpRez >= 50 && inpRez <= 99) text.setAttribute('rows', rowsOfNumber = 2)
        else if (inpRez >= 100 && inpRez <= 149) text.setAttribute('rows', rowsOfNumber = 3)
        else if (inpRez >= 150 && inpRez <= 199) text.setAttribute('rows', rowsOfNumber = 4)
        else if (inpRez >= 200) text.setAttribute('rows', rowsOfNumber = 5)
        else text.setAttribute('rows', rowsOfNumber = 1)

    }

    return (
        <div className='mess-page'>
            {messageArr.map(data => {
                if (data.id == id) return (
                    <div className="messanger-inspection-ls">
                        <div className="messanger-name">
                            <div className='messanger-image'></div>
                            <p className="message-user">{data.userName}</p>
                        </div>
                        <div className='messange-container'>
                            <div className="massnnge-time">{data.time}</div>
                            <div className='message-category'>{data.messageCategory}</div>
                            <div className="massnnge-text">{data.messageText}</div>
                        </div>
                        <div className="massnnge-answer">
                            {/* <input className="answer" placeholder="Ответить..." /> */}
                            <textarea ref={inp} onInput={CheckInput} className='answer' autoFocus placeholder="Ответить..." name="" id="text" rows='1'></textarea>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
