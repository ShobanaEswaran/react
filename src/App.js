import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Logo from "./../logo.png";
import Header from "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
