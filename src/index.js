import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting1,Greeting2} from './Greetings'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    <Greeting1/>
    <Greeting2/>
    </>
);
