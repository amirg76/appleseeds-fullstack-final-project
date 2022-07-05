import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Header/Header.js";
import MainPage from "./components/MainPage/MainPage";
import MainBoard from "./components/MainBoard/MainBoard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter forceRefresh={true}>
        {/* <Header /> */}

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/a" exact component={MainBoard} />
          {/* <Route path="/reviews" exact component={ReviewsPage} />
      <Route path="/:id" exact component={CharacterMore} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
