import React from 'react'
import { logo } from "../constants";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import Group from "./UserAndGroupUI/Group";

const Groups = () => {
  return (
    <div className="flex-[0.7] mt-5">
      <div className="flex items-center bg-white  rounded-[20px] p-[2px]">
        <img className="h-[3rem] w-[4rem] rounded-full" src={logo} />
        <p className="ml-10 font-extrabold text-[30px] text-gray-600">
          Available Groups
        </p>
      </div>
      <div className="bg-white rounded-[20px] px-[10px] py-[6px] mt-[15px]  flex justify-between">
        <input
          className="border-none outline-none p-[10px]"
          placeholder="Search"
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="h-[450px] p-[10px] overflow-scroll ">
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
      </div>
    </div>
  )
}

export default Groups