import "./Widget.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="left-title">USERS</span>
        <span className="left-counter">21312</span>
        <span className="left-link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        <PersonOutlinedIcon className="personal-icon" />
      </div>
    </div>
  );
};

export default Widget;
