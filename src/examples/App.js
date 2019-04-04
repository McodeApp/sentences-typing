import React from "react";
import {Typing} from "../lib";

const sentences = [
    "1: Lorem ipsum dolor sit amet",
    "2: consectetur adipiscing elit",
    "3: sed do eiusmod tempor",
    "4: incididunt ut labore et dolore",
];

const App = () =>
    (
        <div style={{display: "flex"}}>
            <div style={{width: "50%"}}>
                <h3> Sentences typing </h3>
                <Typing sentences={sentences}/>
            </div>
            <div style={{width: "50%"}}>
                <h3> Sentences typing - infinity mode </h3>
                <Typing sentences={sentences} infinity/>
            </div>
        </div>
    );

export default App;
