
import React from "react";
import ReactDOM from "react-dom/client";
// const heading=React.createElement(
// "h1",{id : "heading"},
//  "Hello World from  React!");

// const root=ReactDOM.createRoot(
// document.getElementById("root"));
// root.render(heading);


// const parents = React.createElement(
//     "div", { id: "parent" },
//     [React.createElement(
//         "div", { id: "child" },
//         [React.createElement(
//             "h1", {}, "Hi! This is a Namaste JavaScript Playlist Tutorial"
//         ),React.createElement(
//             "h2", {}, "I'm a h2 tag!")]
//     ),React.createElement(
//         "div", { id: "child2" },
//         [React.createElement(
//             "h1", {}, "I'm a h1 tag!"
//         ),React.createElement(
//             "h2", {}, "I'm a h2 tag!")]
//     )]
// );

// React element
const heading=<h1 className="head">Namaste react Using JSX</h1>
// console.log(heading);

const title1=<h1>Namaste react element</h1>

const Title2 = ()=>(
    <h1>Namaste React Functional Component called</h1>
);

// React Functional component
const HeadingComponent=()=>(
    <div id="container">
        {/* element called */}
        {heading} 
        {/* element called       */}
        {title1}        
        {/* function called */}
        <Title2/>   
        {/* functional call method 2   */}
        {Title2()}     
        {/* {console.log("xyz")}; */}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);