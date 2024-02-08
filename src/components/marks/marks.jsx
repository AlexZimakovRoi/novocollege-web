import { Component } from 'react'
import UserCard from '../userCard/userCard'
import { Outlet } from 'react-router-dom'

class Marks extends Component {
    render() {
        return (
            <main className="dashBoard">
                <UserCard
                    getUserCard1='/course'
                    getUserCard2='/'
                    getUserCard3='/'
                    getUserCard4='/'

                    getPage='/marks'

                    butName1='Оценки'
                    butName2=''
                    butName3=''
                    butName4=''
                />
                <Outlet />
            </main>
        )
    }
}

export default Marks