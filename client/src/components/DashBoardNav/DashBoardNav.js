import React from "react";
import "./DashBoardNav.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { myContext } from "../Context/mycontext";
import { useContext } from "react";
import { style } from "@mui/system";
const DashBoardNav = () => {
  const { dark, setDark } = useContext(myContext);
  return (
    <div className="dash-navbar">
      <div className="wrapper">
        <div className="search">
          <input className="search-input" type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon onClick={() => setDark(!dark)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
