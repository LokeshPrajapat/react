import React, { useState } from "react";
import lookAndFeel from './AppExample23.module.css'
const AppExample23=()=>{
    const [themeName,setThemeName]=useState('darkLook');
    const [theme,setTheme]=useState(lookAndFeel.darkLook);
    const changeTheme=(ev)=>{
        setThemeName(ev.currentTarget.value);
        if(ev.currentTarget.value=="darkLook")
        {
            setTheme(lookAndFeel.darkLook);
        }
        if(ev.currentTarget.value=='lightLook')
        {
            setTheme(lookAndFeel.lightLook);
        }
    }
return(
    <div className={lookAndFeel.mainContainer}>
        <h1 >Thinking Machines</h1>
        <br/>
        Theme : &nbsp;&nbsp;
        <select value={themeName} onChange={changeTheme}>
            <option value='darkLook'>Dark</option>
            <option value='lightLook'>Light</option>
        </select>
        <SloganComponent theme={theme}/>
    </div>
)
}
const SloganComponent=({theme})=>{
    return(
        <div className={[theme,lookAndFeel.slogan].join(" ")}> 
            Think Big <br/>
            We teach more than we promise to teach
        </div>
    )
}
export default AppExample23;