// import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Header/Header.js";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Header />

      <Switch>
        <Route path="/" exact component={MainPage} />
        {/* <Route path="/media" exact component={MediaPage} />
      <Route path="/reviews" exact component={ReviewsPage} />
      <Route path="/:id" exact component={CharacterMore} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
