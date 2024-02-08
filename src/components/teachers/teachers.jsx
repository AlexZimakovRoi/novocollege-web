import React from "react";
import UserCard from "../userCard/userCard";
import { Outlet } from "react-router-dom";

class Teachers extends React.Component {
    render() {
        return (
            <main className="dashBoard">
                <UserCard
                    getUserCard1='/allteachers'
                    getUserCard2='/yourteachers'
                    getUserCard3='/'
                    getUserCard4='/'

                    getPage='/teachers'

                    butName1='Все преподаватели колледжа'
                    butName2='Преподаватели ваших курсов'
                    butName3=''
                    butName4=''
                />
                <Outlet />
            </main>
        )
    }
}

export default Teachers;