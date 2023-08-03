import React from "react";

const AppExample17=()=>{

    const arrayReducer=()=>{
        var x=[10,20,30];
        x.reduce((a,b,c,d)=>{
            alert(a);
            alert(b);
            alert(c);
            alert(d);
        });
    }
return (
    <div>
        <h1>Thinking Machines</h1>
        <button type="button" onClick={arrayReducer}>A rrayReducer</button>
    </div>
)
}

export default AppExample17;