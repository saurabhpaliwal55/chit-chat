import React from 'react'
import MainContainer from './components/MainContainer'
import Login from './components/Login'
import {Route, Routes} from "react-router-dom"
import Welcome from './components/Welcome'
import ChatArea from './components/ChatArea'
import Users from './components/Users'
import Groups from './components/Groups'
import CreateGroup from './components/CreateGroup'

const App = () => {
  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="app" element={<MainContainer/>}>
          <Route path="welcome" element={<Welcome/>}></Route>
          <Route path="chat" element={<ChatArea/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="groups" element={<Groups/>}></Route>
          <Route path="create-groups" element={<CreateGroup/>}></Route>
        </Route>
      </Routes>
      </div>
  )
}

export default App


