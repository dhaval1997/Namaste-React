//create an html element using JavaScript.

// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React Using JavaScript";

// const rootDir = document.getElementById("root");
// rootDir.appendChild(heading);

// create an element using React
// syntax: React.createElement("HTML tag", {set attributes}, "context and child element")
const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", {id:"child"}, [
      React.createElement("h2", {}, "this is h2 tag"),
      React.createElement("h1", {}, "this is h1  tag"),
    ]),
  React.createElement("div", {}, [
    React.createElement("h2", {}, "this is h2 tag"),
    React.createElement("h1", {}, "this is h1  tag"),
  ]),
 ]); //'heading' is react element which is JS object.
const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDOM is from reactDom library
console.log(heading); //  JS objects
root.render(heading); //render means it converts React element(object) into HTML(browser understand)
