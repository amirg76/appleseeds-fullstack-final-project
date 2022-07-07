import "./UsersData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import UsersDataTable from "../UsersDataTable/UsersDataTable";

const UsersData = () => {
  return (
    <div className="userdata-main">
      <DashBoardSide />
      <div className="userdata-container">
        <DashBoardNav />

        <UsersDataTable />
      </div>
    </div>
  );
};

export default UsersData;
