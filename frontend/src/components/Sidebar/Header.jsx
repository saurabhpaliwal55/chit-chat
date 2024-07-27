import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[20px] px-[10px] py-[5px] m-[10px] flex justify-between" >
      <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div>
        <IconButton onClick={()=>navigate("users")}>
          <PersonAddIcon />
        </IconButton>
        <IconButton onClick={()=> navigate("groups")}>
          <GroupAddIcon />
        </IconButton>
        <IconButton onClick={()=> navigate("create-groups")}>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <NightlightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
