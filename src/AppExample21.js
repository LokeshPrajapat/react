import React, { createContext, useContext, useState } from "react";

const slogans=[
    "Think Big",
    "We teach more than we promise to teach",
    "Learn one implement many"
];

const SloganContext=createContext();

const AppExample21=()=>{
    const [selectedSloganIndex,setSelectedSloganIndex]=useState(0);
    const changeSlogan=()=>{
        setSelectedSloganIndex((currentIndex)=>{
            if(currentIndex==slogans.length-1) return 0;
            else return currentIndex+1;
        });
    }
return (
    <div>
        <SloganContext.Provider value={slogans[selectedSloganIndex]}>
        <CourseComponent />
        <ProjectsComponent />
        </SloganContext.Provider>
        <br/>
        <button type="button" onClick={changeSlogan}>Change Slogan</button>
    </div>
)
}

const CourseComponent=()=>{
    const slogan=useContext(SloganContext);
    return(
        <div>
            <ul>
                <li>C Programming</li>
                <li>C++ Programming</li>
                <li>Java Programming</li>
                <li>J2EE Programming</li>
                <li>Python Programming</li>
                <li>C# Programming</li>
            </ul>
            <div style={{color:"orange"}}>{slogan}</div>
        </div>
    )
}

const ProjectsComponent=()=>{
    const slogan=useContext(SloganContext);
    return(
        <div>
            <ul>
                <li>ORM Framework</li>
                <li>Media Server</li>
                <li>MVC Framework</li>
            </ul>
            <div style={{color:"red"}}>{slogan}</div>
        </div>
    )
}

export default AppExample21;