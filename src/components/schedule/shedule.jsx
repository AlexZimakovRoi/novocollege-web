import React from "react";
import UserCard from "../userCard/userCard";
import { Outlet } from "react-router-dom";
import './shedule.css'

class Shedule extends React.Component {
    render() {
        return (
            <main className="dashBoard">
                <UserCard
                    getUserCard1='/shedule'
                    getUserCard2='/events'
                    getUserCard3='/'
                    getUserCard4='/'

                    getPage='/shedule'

                    butName1='Расписание предметов'
                    butName2='Расписание мероприятий'
                    butName3=''
                    butName4=''
                />
                <Outlet />
            </main>
        );
    }
}

export default Shedule