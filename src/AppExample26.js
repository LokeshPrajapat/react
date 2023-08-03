import React, { useMemo, useState } from "react";
const AppExample26=()=>{
    const [counter,setCounter]=useState(0);
    const updateCounter=()=>{
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>Thinking Machines</h1>
            Count=&nbsp;{counter}
            <br/>
            <button onClick={updateCounter}>++</button>
            <DashBoard count={counter}/>
        </div>
    )
}

var oldObject=null;
const DashBoard=(count)=>{
    const object=useMemo(()=>{return {"city":"dewas","state":"M.P"}},[]);;
  
    alert(oldObject==object);
    oldObject=object;
    return (
        <div>
         
        </div>
    )
}
export default AppExample26;