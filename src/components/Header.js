import {LOGO} from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO} ></img>
        </div>
        <div className="nav-item">
          <ul>
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
