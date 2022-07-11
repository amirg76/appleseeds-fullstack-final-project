import "./SingleUser.css";
import { useState, useEffect } from "react";
import { API } from "../../Api/BankApi";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";

import AccountChart from "../AccountChart/AccountChart";
import Movements from "../Movements/Movements";
const SingleUser = (props) => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      const accountNum = props.match.params.Id;
      console.log(accountNum);
      try {
        const { data } = await API.post("/accounts/get-acc-by-id", {
          accountNum: accountNum,
        });
        setAccount(data);
        console.log(data);
        await fetchUser();
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAccount();
  }, []);

  const fetchUser = async () => {
    const accountNum = props.match.params.Id;
    console.log(accountNum);
    try {
      const { data } = await API.post("/users/get-by-acc", {
        accountNum: accountNum,
      });
      setData(data[0]);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="single">
      <DashBoardSide />
      <div className="singleContainer">
        <DashBoardNav />
        <div className="top">
          <div className="left">
            <div className="editButton">ערוך</div>
            <h1 className="title">מידע</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                {console.log(data.f_name)}
                <h1 className="itemTitle">
                  <span> {data.f_name} </span>
                  <span>{data.l_name}</span>
                </h1>
                <div className="detailItem">
                  <span className="itemKey">אימייל:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <AccountChart
              aspect={3 / 1}
              title="User Spending ( Last 6 Months)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Movements />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
