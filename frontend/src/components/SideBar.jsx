import React from 'react'

import Header from './Sidebar/Header';
import Search from './Sidebar/Search';
import Conversation from './Sidebar/Conversation';

const SideBar = () => {
  return (
    <div className='p-2 flex flex-col flex-[0.3]'>
    <Header/>
    <Search/>
    <Conversation/>
    </div>
  )
}

export default SideBar