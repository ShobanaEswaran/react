import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>React element heading</h1>;

const Title = () => <h1>React component heading</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>React composition heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
