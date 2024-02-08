import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-input-div">
                    <svg className="header-svg" id="lupa" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="15.7071" width="1" height="8" transform="rotate(-45 15 15.7071)" fill="#F3F3F4" />
                        <circle cx="9" cy="9" r="8.5" stroke="#F3F3F4" />
                    </svg>
                    <input className="header-input" placeholder="Поиск в сообщениях..." type="text" />
                </div>
                <div className="header-right-div">
                    <div className="header-utils-div">
                        <a className="header-a-ico" href="">
                            <svg className="header-svg-ico-fill header-svg" width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 2C7 0.89543 7.89543 0 9 0C10.1046 0 11 0.895431 11 2V4.06189C14.9463 4.55399 18 7.92038 18 12V18C18 19.1046 17.1046 20 16 20H12C12 21.6569 10.6569 23 9 23C7.34315 23 6 21.6569 6 20H2C0.89543 20 0 19.1046 0 18V12C0 7.92038 3.05369 4.55399 7 4.06189V2ZM16 19C16.5523 19 17 18.5523 17 18V12C17 8.13401 13.866 5 10 5H8C4.13401 5 1 8.13401 1 12V18C1 18.5523 1.44772 19 2 19H16ZM7 20C7 21.1046 7.89543 22 9 22C10.1046 22 11 21.1046 11 20H7Z" fill="#878890" />
                            </svg>
                        </a>
                        <NavLink className="header-a-ico" to="/messages">
                            <svg className="header-svg-ico-rect header-svg" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="21" height="15" rx="3.5" stroke="#EFF0F1" />
                                <path d="M4 5L10.125 10H11.875L18 5" stroke="#EFF0F1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </NavLink>
                    </div>
                    <div className="header-user-div">
                        <NavLink to="/dashboard/infouser">
                            <p className="header-user-p">Иванов Иван</p>
                        </NavLink>
                        <div className="header-user-picture">

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;