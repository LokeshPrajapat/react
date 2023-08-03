import React from "react";
import  {withStyles} from "@material-ui/core/styles";

const lookAndFeelClasssGenerator=()=>{
    return ({
        "mainContainer":{
            width:"400px",
            height:"500px",
            border:"1px solid red",
            margin:"10px",
            padding:"5px"
        },
        "mainHeading":{
            fontSize:"30pt",
            color:"red",
            fontWeight:"bold"
        },
        "subHeading":{
            fontSize:"20pt",
            color:"magenta",
            fontWeight:"bold"
        }
    })
}

const AppExample29=withStyles(lookAndFeelClasssGenerator)(({classes})=>{
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainHeading}>Thinking Machines</div>
            <div className={    classes.subHeading}>Think Big</div>
            <SloganComponent heading/>  //boolean property by default true
        </div>
    )
});

const SloganComponent=({heading})=>{
    if(heading) return (
        <h1>We teach more than we promise to teach</h1>
    )
    else return (
        <div>
            We teach more than we promise to teach.
        </div>
    )   
}

export default AppExample29;