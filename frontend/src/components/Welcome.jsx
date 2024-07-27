import React from 'react'
import { logo } from '../constants'


const Welcome = () => {
  return (
    <div className='p-2 w-[70%] flex flex-col justify-center items-center bg-white rounded-[20px] my-[15px]'>
        <img className='h-[500px] w-[500px] ' src={logo} alt="No image found" />
    </div>
  )
}

export default Welcome