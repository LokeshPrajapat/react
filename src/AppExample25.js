import React from "react";
const images=require.context("../public/students")
const first=images("./first.jpg");
const s="second.jpg"
const second=images(`./${s}`);
const AppExample25=()=>{
    return (
        <div>
            <h1>Thinking Machines</h1>
            <img src={first}/>
            <br/>
            <img src={second}/><br/>
            <img src={`${process.env.PUBLIC_URL}/students/${s}`}/>
        </div>
    )
}
export default AppExample25;