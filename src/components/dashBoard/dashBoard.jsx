import React from "react";
import { Outlet } from "react-router-dom";
import UserCard from "../userCard/userCard";

class DashBoard extends React.Component {
    render() {
        return (
            <main className="dashBoard">
                <UserCard
                    getUserCard1='/'
                    getUserCard2='/infouser'
                    getUserCard3='/courselist'
                    getUserCard4='/docs'

                    getPage='/dashboard'

                    butName1='Зачеты'
                    butName2='Подробная информация'
                    butName3='Список курсов'
                    butName4='Документы'
                />
                <Outlet />
            </main>
        )
    }
}

export default DashBoard;