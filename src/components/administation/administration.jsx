import React from "react";
import UserCard from "../userCard/userCard";
import { Outlet } from "react-router-dom";

class Administration extends React.Component {
    render() {
        return (
            <main className="dashBoard">
                <UserCard
                    getUserCard1='/colladministration'
                    getUserCard2='/docadministration'
                    getUserCard3='/'
                    getUserCard4='/'

                    getPage='/administration'

                    butName1='Администрация колледжа'
                    butName2='Документы колледжа'
                    butName3=''
                    butName4=''
                />
                <Outlet />
            </main>
        )
    }
}

export default Administration;