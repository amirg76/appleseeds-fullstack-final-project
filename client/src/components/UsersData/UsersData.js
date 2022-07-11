import "./UsersData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import UsersTable from "../UsersTable/UsersTable";

const UsersData = () => {
  return (
    <div className="userdata-main">
      <DashBoardSide />
      <div className="userdata-container">
        <DashBoardNav />

        <UsersTable />
      </div>
    </div>
  );
};

export default UsersData;
