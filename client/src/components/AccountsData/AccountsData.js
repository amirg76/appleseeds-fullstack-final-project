import "./AccountsData.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import AccountTable from "../AccountTable/AccountTable";

const AccountsData = () => {
  return (
    <div className="accounts-data-main">
      <DashBoardSide />
      <div className="accounts-data-container">
        <DashBoardNav />

        <AccountTable />
      </div>
    </div>
  );
};

export default AccountsData;
