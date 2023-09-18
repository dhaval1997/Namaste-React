import React from "react";
import ReactDOM from "react-dom";

// jsx transpiled before it reaches the js - Parcel - Babel

// jsx => Babel transpiles it to React.createElement => ReactElement-js Object => HTML element(render)
// Everything is React is Component

// React Functional component

const HeadingComponent = () => {
  return <h1>Namaste Functional Component</h1>;
};

const Title = () => <h1 className="head">Namaste React using jsx</h1>; //this is react functional component;
const title = <h2 className="head">Namaste React using JavaScript</h2>; // this is js variable

const number = 10000;
const HeadingComponent2 = () => (
  <div>
    <h2>{console.log("Namaste")}</h2>
    {Title()}
    <Title></Title>
    <Title /> // this is react functional component
    {title} // you can inject js variable
    <h1 id="heading">Namaste Functional Component</h1>
  </div>
);

const heading = <h1> this is h1 using jsx </h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
  