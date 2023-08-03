import React, { useState }  from "react";
import lookandFeel from 'styled-components'

const StylishContainer=lookandFeel.div`
    width:500px;
    height:400px;
    margin:10px;
    padding:5px;
    border:2px solid green;
`;
const StylishHeading=lookandFeel.h1`
    background:linear-gradient(to left,yellow,green);
    color:black;
    padding:5px;
    font-size:30pt;
`;

const StylishAboutUs=lookandFeel.div`
    width:400px;
    height:200px;
    padding:5px;
    margin:10px;
    background:${(wrapper)=>{ return wrapper.themeInAction.backgroundColor}};
    color:${(wrapper)=>{return wrapper.themeInAction.foregroundColor}};
    border:${(wrapper)=>{return wrapper.themeInAction.borderType}};

`;
const StylishModuleHeading=lookandFeel.h1`
    font-weight:bold;
    font-size:20pt;
`;

const darkTheme={
    backgroundColor:"black",
    foregroundColor:"white",
    borderType:"2px solid red"
}
const lightTheme={
    backgroundColor:"white",
    foregroundColor:"black",
    borderType:"2px solid black"
}

const AppExample24=()=>{
    const [themeName,setThemeName]=useState('darkLook');
    const [theme,setTheme]=useState(darkTheme);
    const updateTheme=(ev)=>{
        setThemeName(ev.target.value);
        if(ev.target.value==='darkLook')setTheme(darkTheme);
        if(ev.target.value==='lightLook')setTheme(lightTheme);
    }
return(
    <StylishContainer>
        <StylishHeading>Thinking Machines</StylishHeading>
        Select Theme &nbsp;&nbsp;
        <select value={themeName} onChange={updateTheme}>
        <option value='darkLook'>Dark</option>
        <option value='lightLook'>Light</option>
        </select>
        <AboutUsComponent applyTheme={theme}/>
    </StylishContainer>
)
}

const AboutUsComponent=({applyTheme})=>{
    return(
        <StylishAboutUs themeInAction={applyTheme}>
            <StylishModuleHeading>About Us</StylishModuleHeading>
            We teach  more than we promise to teach.
        </StylishAboutUs>
    )
}
export default AppExample24;