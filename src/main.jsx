import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './reset.css';
import Header from './components/header/Header';
import './components/header/Header.css'
import NavBar from './components/navBar/NavBar';
import './components/navBar/NavBar.css'
import Messanger from './components/messanger/messanger';
import './components/messanger/messanger.css'
import DashBoard from './components/dashBoard/dashBoard';
import './components/dashBoard/dashBoard.css'
import Credits from './components/dashBoard/credits/credits';
import Docs from './components/dashBoard/docs/docs';
import CourseList from './components/dashBoard/courseList/courseList';
import UserInfo from './components/dashBoard/userInfo/userInfo';
import Shedule from './components/shedule/shedule';

import Teachers from './components/teachers/teachers';
import './components/teachers/teachers'
import AllTeachers from './components/teachers/allteachers/allteachers';
import './components/teachers/allteachers/allteachers.css'
import YourTeachers from './components/teachers/yourteachers/yourteachers';
import YourShedule from './components/shedule/yourShedule';
import EventsShedule from './components/shedule/eventsShedule';
import Marks from './components/marks/marks';
import CousreMarks from './components/marks/cousreMarks';
import MessangerBox from './components/messanger/messangerBox';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <NavBar />
      <div className='page-container'>
        <Header />
        <Routes>
          <Route index element={<h1>Main Page</h1>} />
          <Route path='/messages' Component={Messanger}>
            <Route path='/messages/:id' Component={MessangerBox} />
          </Route>
          <Route path='/shedule' Component={Shedule}>
            <Route path='/shedule/shedule' Component={YourShedule} />
            <Route path='/shedule/events' Component={EventsShedule} />
          </Route>
          <Route path='/marks' Component={Marks}>
            <Route path='/marks/course' Component={CousreMarks} />
          </Route>
          <Route path='/dashboard/' Component={DashBoard}>
            <Route path='/dashboard/' Component={Credits} />
            <Route path='/dashboard/infouser' Component={UserInfo} />
            <Route path='/dashboard/courselist' Component={CourseList} />
            <Route path='/dashboard/docs' Component={Docs} />
          </Route>
          <Route path='/teachers' Component={Teachers}>
            <Route path='/teachers/allteachers' Component={AllTeachers} />
            <Route path='/teachers/yourteachers' Component={YourTeachers} />
          </Route>
        </Routes>
      </div>
    </React.StrictMode>
  </BrowserRouter>
)