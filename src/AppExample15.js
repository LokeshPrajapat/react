import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

const AppExample15=()=>{
    const [title,setTitle]=useState("Think Big");
    const [doSome,setDoSome]=useState("Change some thing");
    const changeTitle=()=>{
        setTitle("We teach more than we promise to teach");
    }
    const doSomeThing=()=>{
       setDoSome("Update Some thing") 
    }
    useEffect(()=>{
        alert('cool');
    },[changeTitle]);
    return(
        <div>
            <TitleComponent title={title}/>
            <button onClick={changeTitle}>ChangeTitle</button>
            <button onClick={doSomeThing}>Do Some Thing</button>
        </div>
    )

}

const TitleComponent=({title})=>{
    return(
        <div>
            {title}
        </div>
    )
}

export default AppExample15;