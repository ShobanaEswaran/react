import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "I'm a h1 tag");

const parent = React.createElement("div", { id: "parent" }, [
  heading,
  React.createElement("h2", { id: "heading2" }, "I'm a h2 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
