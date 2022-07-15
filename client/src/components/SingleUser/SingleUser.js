import "./SingleUser.css";

import { useState, useEffect } from "react";
import { API } from "../../Api/BankApi";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";

import AccountChart from "../AccountChart/AccountChart";
import Movements from "../Movements/Movements";
import { Link, Redirect } from "react-router-dom";
const SingleUser = (props) => {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      <Redirect to="/" />;
    }
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      const accountNum = props.match.params.Id;
      console.log(accountNum);
      try {
        const { data } = await API.post(
          "/users/get-by-acc",
          {
            accountNum: accountNum,
          },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQwMTM4MzBkNDA3ODIzNWJiNTExZDgiLCJpYXQiOjE2NTc4MDM2NTJ9.PnOY09NMVWiD60mzLYQ5uUnxZIlBtKY_gL0OtNZT4bg",
            },
          }
        );
        setData(data[0]);
        console.log(data);
        await fetchAccount(accountNum);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUser();
  }, []);

  const fetchAccount = async () => {
    const accountNum = props.match.params.id;
    console.log(accountNum);
    setIsLoading(true);
    try {
      const { data } = await API.post("/accounts/get-acc-by-id", {
        accountNum: accountNum,
      });
      setAccount(data);
      console.log(data);
      await fetchUser(accountNum);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchUser = async (accountNum) => {
    // const accountNum = props.match.params.Id;
    console.log(accountNum);
    try {
      const { data } = await API.post(
        "/users/get-by-acc",
        {
          accountNum: accountNum,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8.eyJfaWQiOiI2MmQwMTM4MzBkNDA3ODIzNWJiNTExZDgiLCJpYXQiOjE2NTc4MDM2NTJ9.PnOY09NMVWiD60mzLYQ5uUnxZIlBtKY_gL0OtNZT4bg",
          },
        }
      );
      setData(data[0]);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="single">
      <DashBoardSide />
      <div className="singleContainer">
        <DashBoardNav />
        <div className="top">
          <div className="left">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <div className=" infoButton editButton">ערוך</div>
            </Link>
            <Link
              to="/accounts/new-account/:id"
              style={{ textDecoration: "none" }}
            >
              <div className="infoButton addButton">הוסף חשבון חדש</div>
            </Link>
            <h1 className="title">מידע</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">
                  <span> מס חשבון </span>
                  <span>{account.accountNum}</span>
                </h1>
                <h1 className="itemTitle">
                  <span> {data.f_name} </span>
                  <span>{data.l_name}</span>
                </h1>
                <div className="detailItem">
                  <span className="itemKey">אימייל:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <div className="itemKey">טלפון:</div>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <div className="itemKey">כתובת</div>
                  <span className="itemValue">{data.address}</span>
                </div>
                <div className="detailItem">
                  <div className="itemKey">עיר:</div>
                  <span className="itemValue">{data.city}</span>
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
          {console.log(account)}
          <h1 className="title">Last Transactions</h1>

          {account && <Movements accountMov={account} />}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
