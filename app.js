import React from "react";
import ReactDOM from "react-dom";

/*
* - Header
    -logo
    -nav-bar
  -Body
    -search
    -restaurant-container
      -restaurant-card
        -img
        -Name of rest
        -star rating
        -Cuisine
        -delivery time
  -Footer
    -links
    -copyright
*
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/5462907/screenshots/11960844/media/6ab1a3dfa24d9b88fd20b92746d62c70.png"
        ></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo" src="https://assets.vogue.com/photos/63d169f727f1d528635b4287/16:9/w_3631,h_2042,c_limit/GettyImages-1292563627.jpg"></img>
      <h3>Namaste food</h3>
      <h5>South Indian</h5>
      <h5>4.4 Star</h5>
      <h5>35 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
