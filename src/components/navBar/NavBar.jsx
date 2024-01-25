import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

class NavBar extends React.Component {
    navButtons = [{ id: 1, valueButton: 'Личный кабинет', pageUrl: '/dashboard', }, { id: 2, valueButton: 'Расписание', pageUrl: '/shedule', }, { id: 3, valueButton: 'Регистрация', pageUrl: '/register', }, { id: 4, valueButton: 'Оценки', pageUrl: '/marks', }, { id: 5, valueButton: 'Сдача работ', pageUrl: '/delive-works', }, { id: 6, valueButton: 'Сообщения', pageUrl: '/messages', }, { id: 7, valueButton: 'Преподаватели', pageUrl: '/teachers', }, { id: 8, valueButton: 'Администрация', pageUrl: '/administration', },]
    render() {
        return (
            <nav>
                <div className="navbar-logo-div">
                    <svg className="navbar-logo-svg" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.30128 19.1141C4.25078 19.4554 3.67587 20.5837 4.0172 21.6342L8.96148 36.8511C9.30281 37.9016 10.4311 38.4765 11.4816 38.1352L23.8454 34.118C29.0979 32.4113 31.9724 26.7698 30.2658 21.5173C30.032 20.7978 29.7244 20.123 29.3541 19.4985C28.2456 20.6646 26.8391 21.5792 25.2015 22.1113L12.8377 26.1285C11.7872 26.4698 10.6589 25.8949 10.3176 24.8444L8.15445 18.187L5.30128 19.1141Z" fill="#9E01FF" />
                        <path d="M29.3542 19.4985C28.2456 20.6646 26.8391 21.5792 25.2015 22.1113L12.8377 26.1285C11.7872 26.4699 10.6589 25.895 10.3176 24.8445L8.15448 18.1871L17.665 15.0969C22.1982 13.624 27.021 15.5633 29.3542 19.4985Z" fill="#9E00FF" />
                        <path d="M6.65742 7.10737C5.60692 7.4487 5.03201 8.57701 5.37334 9.62752L8.1545 18.187L17.6651 15.0969C22.1982 13.624 27.021 15.5632 29.3542 19.4985C31.8012 16.9246 32.7964 13.1254 31.6219 9.51054C29.9152 4.258 24.2737 1.38349 19.0212 3.09015L6.65742 7.10737Z" fill="#BE6CFF" />
                    </svg>
                    <p className="navba-logo-p">Name org</p>
                </div>
                <div className="navbar-buttons-div">{this.navButtons.map(data => (
                    <NavLink id={data.id} to={data.pageUrl}><div className="active-sel"></div><p>{data.valueButton}</p></NavLink>
                ))}</div>
            </nav>
        )
    }
}

export default NavBar;