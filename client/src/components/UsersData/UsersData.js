import "./UsersData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import DataTable from "../DataTable/DataTable";

const UsersData = () => {
  return (
    <div className="userdata-main">
      <DashBoardSide />
      <div className="userdata-container">
        <DashBoardNav />

        <DataTable type="users" />
      </div>
    </div>
  );
};

export default UsersData;
