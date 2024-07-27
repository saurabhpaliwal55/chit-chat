import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Search = () => {
  return (
    <div className="bg-white rounded-[20px] px-[10px] py-[4px] m-[10px]  flex justify-between">
      <input className="border-none outline-none p-[10px]" placeholder="Search" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
