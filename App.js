import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div",{id:"main"},[
    React.createElement("h1",{},"I am a H1 tag"),
    React.createElement("h2",{},"I am a H2 tag")
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)