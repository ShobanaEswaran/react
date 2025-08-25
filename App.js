import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Logo from "./logo.png";

const Header = () => (
  <div id="header">
    <div>
      <img
        src={"https://github.com/ShobanaEswaran/react/logo.png"}
        alt="Logo"
      />
    </div>
    <div className="menus">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Footer = () => (
  <div id="footer">
    <h4>© 2025 HappyFoodCourt Limited</h4>
  </div>
);

const RestaurantCard = (props) => {
  return <div className="restaurant-card"></div>;
};

const Main = () => (
  <div id="main">
    <div>Search</div>
    <div className="restaurant-cards-container">
      <RestaurantCard />
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
