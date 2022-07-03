import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import "./MainPage.css";
const MainPage = () => {
  // const { data, setData } = useContext(myContext);
  // const { data, setData, navToggle } = useContext(myContext);

  const [userQuery, setUserQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="main-container">
      <Carousel />
    </div>
  );
};

export default MainPage;
