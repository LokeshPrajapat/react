import React, { useState } from "react";
import './AppExample22.css'
const AppExample22=()=>{
    const [theme,setTheme]=useState('lightLook');
    const changeTheme=(ev)=>{
        setTheme(ev.currentTarget.value);
    }
    return(
        
        <div className="mainContainer">
            <h1>Thinking Machines</h1>
            <select value={theme} onChange={changeTheme}>
                <option value='darkLook' >Dark</option>
                <option value='lightLook'>Light</option>
            </select>
            <br/>
            <br/>
            <SloganComponent theme={theme}/>
            </div>
    )
}

    const SloganComponent=({theme})=>{
        return(
            <div className={[theme,"slogan"].join(" ")}> 
                Think Big <br/>
                We teach more than we promise to teach
            </div>
        )
    }

export default AppExample22;