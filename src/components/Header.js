import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [onLogIn, setOnClick] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                onLogIn == "LogIn" ? setOnClick("LogOut") : setOnClick("LogIn");
              }}
            >
              {onLogIn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


