import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";
import { myContext } from "../Context/mycontext.js";
import { Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./LoginForm.css";
import { API } from "../../Api/BankApi";

const LoginForm = ({ openLogin, closeAll }) => {
  // React States
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { login, setLogin } = useContext(myContext);
  const [isLogin, setIsLogin] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const fetchUser = async (newLogin) => {
    try {
      // const { data } = await API.post("users/login", newLogin, {
      //   headers: {
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQwMTM4MzBkNDA3ODIzNWJiNTExZDgiLCJpYXQiOjE2NTc4MDM2NTJ9.PnOY09NMVWiD60mzLYQ5uUnxZIlBtKY_gL0OtNZT4bg",
      //   },
      // });
      const { data } = await API.post("users/login", newLogin);
      console.log(data.token);
      console.log(data);
      localStorage.setItem("token", data.token);
      setUserData(data.data);
      // setIsOpen(true);
      if (data.token !== undefined) setIsSubmitted(true);
      else if (data.includes("user")) {
        setError(true);
        setErrorMessages({ name: "uname", message: errors.uname });
        renderErrorMessage("uname");
      } else if (data.includes("password")) {
        setError(true);
        setErrorMessages({ name: "pass", message: errors.pass });
        renderErrorMessage("password");
      }
      // <Redirect to="/me" />;
      // hist.push("/accounts/id/5241");

      console.log(isSubmitted);
    } catch (e) {
      console.log(e.message);
      // setError(e.response.data);
    }
  };
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    setInputValues({ ...inputValues, [name]: value });
    // setIsLoading(false);
  };
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    const newLogin = {
      email: inputValues.email,
      password: inputValues.password,
    };
    console.log(newLogin);
    await fetchUser(newLogin);
    // const { uname, pass } = document.forms[0];
    // Compare user info

    // if (userData) {
    //   if (userData.password !== inputValues.password) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //     setIsSubmitted(false);
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    //   setIsSubmitted(false);
    // }

    // };
    // try {
    //   const { data } = await API.post("users/login", newLogin);
    //   console.log(data);
    //   if (data === "sucsses") console.log(data);
    //   {
    //     setIsSubmitted(true);
    //   }
    //   console.log(isSubmitted);

    //   // const postedData = await axios.post(
    //   //   "https://628e6124368687f3e71608eb.mockapi.io//breaking-bad",
    //   //   newReview
    //   // );

    //   // setReviewsData((prev) => {
    //   //   return [...prev, postedData.data];
    //   //   // return [postedData.data, ...prev];
    //   // });
    //   // setInputValues({
    //   //   newUserName: "",
    //   //   newTitle: "",
    //   //   newContent: "",
    //   // });
    //   // setIsLoading(false);
    //   // setIsSuccessPost(true);
    // } catch (e) {
    //   console.log(e.message);
    // }
    //

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value);
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const closeForm = () => {
    setIsOpen(false);
    openLogin(false);
    closeAll(false);
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>שם משתמש </label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={inputValues.email}
            // required
            className="login-form-input"
          />
          {error && errorMessages.name === "uname" && (
            <div style={{ color: "red" }}>{errorMessages.message}</div>
          )}
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>סיסמא </label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputValues.password}
            // required
            className="login-form-input"
          />
          {error && errorMessages.name === "pass" && (
            <div style={{ color: "red" }}>{errorMessages.message}</div>
          )}
          {/* {renderErrorMessage("pass")} */}
        </div>
        {/* <Link to="/users/login"> */}
        <div className="button-container">
          <input type="submit" />
        </div>
        {/* </Link> */}
      </form>
    </div>
  );

  return (
    <>
      {login && (
        <div className="form-app">
          <div className="login-form">
            <button onClick={closeForm} className="form-close">
              <FaTimes />
            </button>
            {/* <button className="form-close"></button> */}
            <img className="login-pic" src="/assets/img/logo.png" />
            <div className="title">כניסה לחשבון שלי</div>
            {isSubmitted ? (
              // <div>hi</div>
              <>
                <div>User is successfully logged in</div>
                {console.log("submit")}
                {/* <Redirect to="/me" /> */}
              </>
            ) : (
              renderForm
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
