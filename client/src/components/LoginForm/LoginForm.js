import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { API } from "../../Api/BankApi";

const LoginForm = ({ openLogin, closeAll }) => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
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
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    setInputValues({ ...inputValues, [name]: value });
    // setIsLoading(false);
  };
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log("yes");
    const newLogin = {
      email: inputValues.email,
      password: inputValues.password,
    };
    console.log(newLogin);
    try {
      const postedLogin = await API.post("users/login", newLogin);

      // const postedData = await axios.post(
      //   "https://628e6124368687f3e71608eb.mockapi.io//breaking-bad",
      //   newReview
      // );

      // setReviewsData((prev) => {
      //   return [...prev, postedData.data];
      //   // return [postedData.data, ...prev];
      // });
      // setInputValues({
      //   newUserName: "",
      //   newTitle: "",
      //   newContent: "",
      // });
      // setIsLoading(false);
      // setIsSuccessPost(true);
    } catch (e) {
      console.log(e.message);
    }
    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => name;
  // name === errorMessages.name && (
  //   <div className="error">{errorMessages.message}</div>
  // );
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
      {isOpen && (
        <div className="form-app">
          <div className="login-form">
            <button onClick={closeForm} className="form-close">
              <FaTimes />
            </button>
            {/* <button className="form-close"></button> */}
            <img className="login-pic" src="/assets/img/logo.png" />
            <div className="title">כניסה לחשבון שלי</div>
            {isSubmitted ? (
              <div>User is successfully logged in</div>
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
