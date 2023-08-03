import React, { useState } from "react";

const slogans=[
    "Think Big",
    "We teach more than we promise to teach",
    "Learn one :Implement Any" 
];

const AppExample20=()=>{
    const [selectedSlogan,setSelectedSlogan]=useState(0);
    // const updateSlogan=()=>{
    //     if(selectedSlogan===2)
    //     {
    //         setSelectedSlogan(0);
    //     }
    //     else
    //     {
    //         setSelectedSlogan(selectedSlogan+1);
    //     }
    // }
    const updateSlogan=()=>{
        setSelectedSlogan((currentIndex)=>{
            if(selectedSlogan==2) return 0;
            else return currentIndex+1;
        })       
    }
    return(
        <div>
            <h1>{slogans[selectedSlogan]}</h1>
            <button type="button" onClick={updateSlogan}>Update Slogan</button>
        </div>
    )
}
export default AppExample20;