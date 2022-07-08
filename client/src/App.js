import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Header/Header.js";
import MainPage from "./components/MainPage/MainPage";
import MainBoard from "./components/MainBoard/MainBoard";
import UsersData from "./components/UsersData/UsersData";
import SingleUser from "./components/SingleUser/SingleUser";
import AccountsData from "./components/AccountsData/AccountsData";
import NewUser from "./components/NewUser/NewUser";
import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./components/Context/mycontext";
import "./StyleDark.scss";
function App() {
  const { dark } = useContext(myContext);
  return (
    // <div className="main-app">
    <div className={dark ? "main-app dark" : "main-app"}>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/a" exact component={MainBoard} />
          <Route path="/users" exact component={UsersData} />
          <Route path="/accounts" exact component={AccountsData} />
          <Route
            exact
            path="/users/newuser"
            component={() => (
              <NewUser inputs={userInputs} title="Add New User" />
            )}
          />
          <Route path="/users/id/:userId" exact component={SingleUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
