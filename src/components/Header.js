import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [onLogIn, setOnLogIn] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO}></img></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/about">About US</Link></li>
          <li><Link to="/contact">Contact US</Link></li>
          <li><Link>Help</Link></li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                onLogIn == "LogIn" ? setOnLogIn("LogOut") : setOnLogIn("LogIn");
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


