import "./NewUser.css";
import DashBoardSide from "../DashBoardSide/DashBoardSide";
import DashBoardNav from "../DashBoardNav/DashBoardNav";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewUser = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <DashBoardSide />
      <div className="newContainer">
        <DashBoardNav />
        <div className="new-top">
          <h1>{title}</h1>
        </div>
        <div className="new-bottom">
          <div className="new-left">
            {/* <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            /> */}
          </div>
          <div className="new-right">
            <form className="new-form">
              <div className="new-formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="new-icon" />
                </label>
                <input
                  className="new-input"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="new-formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="new-input"
                  />
                </div>
              ))}
              <button className="new-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
