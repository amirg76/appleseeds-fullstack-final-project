import "./AccountsData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import DataTable from "../DataTable/DataTable";

const AccountsData = () => {
  return (
    <div className="accounts-data-main">
      <DashBoardSide />
      <div className="accounts-data-container">
        <DashBoardNav />

        <DataTable type="accounts" />
      </div>
    </div>
  );
};

export default AccountsData;
