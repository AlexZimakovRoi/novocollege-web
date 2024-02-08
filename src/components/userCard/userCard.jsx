import React from "react";
import { NavLink } from "react-router-dom";

class UserCard extends React.Component {
    render() {
        return (
            <div className="dashBoard-user-div">
                <div className="dashBoard-user-info-div">
                    <div className="dashBoard-user-ava">
                        <img className="dashBoard-user-img" src="/image/userDef.svg" alt="" />
                    </div>
                    <div className="dashBoard-user-name-stat-div">
                        <div className="dashBoard-user-name-div">
                            <p className="dashBoard-user-name">Иванов Иван Иванович</p>
                            <svg className="reform" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2333 5.33337L10.2833 13.2833C9.49158 14.075 7.14156 14.4417 6.61656 13.9167C6.09156 13.3917 6.44989 11.0417 7.24156 10.25L15.1999 2.29168C15.3962 2.07756 15.6338 1.90545 15.8984 1.7857C16.163 1.66595 16.4492 1.60103 16.7396 1.59491C17.0299 1.5888 17.3186 1.64159 17.588 1.7501C17.8574 1.8586 18.1021 2.0206 18.3072 2.22627C18.5123 2.43194 18.6736 2.67702 18.7813 2.94674C18.8891 3.21646 18.9412 3.50521 18.9343 3.79559C18.9273 4.08596 18.8616 4.37195 18.7412 4.63625C18.6207 4.90054 18.4479 5.1377 18.2333 5.33337Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.66663 3.33334H5.49996C4.6159 3.33334 3.76811 3.68452 3.14298 4.30964C2.51787 4.93477 2.16663 5.78261 2.16663 6.66667V15C2.16663 15.8841 2.51787 16.7319 3.14298 17.357C3.76811 17.9822 4.6159 18.3333 5.49996 18.3333H14.6666C16.5083 18.3333 17.1666 16.8333 17.1666 15V10.8333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="dashBoard-user-stat-div">
                            <p className="choetotakoe">ИСиП</p>
                            <p className="skolkoechejit">1 курс</p>
                        </div>
                    </div>
                </div>
                <div className="dashBoard-user-nav-div">
                    <NavLink key={this.props.getUserCard1} to={this.props.getPage + this.props.getUserCard1} className={"dashBoard-user-nav-button"}><div className="active-sel"></div>{this.props.butName1}</NavLink>
                    <NavLink key={this.props.getUserCard2} to={this.props.getPage + this.props.getUserCard2} className={"dashBoard-user-nav-button"}><div className="active-sel"></div>{this.props.butName2}</NavLink>
                    <NavLink key={this.props.getUserCard3} to={this.props.getPage + this.props.getUserCard3} className={"dashBoard-user-nav-button"}><div className="active-sel"></div>{this.props.butName3}</NavLink>
                    <NavLink key={this.props.getUserCard4} to={this.props.getPage + this.props.getUserCard4} className={"dashBoard-user-nav-button"}><div className="active-sel"></div>{this.props.butName4}</NavLink>
                </div>
            </div>
        );
    }
}

export default UserCard