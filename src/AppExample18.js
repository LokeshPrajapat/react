import React, { useReducer }  from "react";

const AppExample18=()=>{
    const items=[
        {code:101,name:"Laptop",stockInHand:50},
        {code:102,name:"Desktop",stockInHand:43},
        {code:103,name:"Printer",stockInHand:90}
    ]

    const transactionReducer=(state,action)=>{
        var i=[];
        var e=0;
        while(e<state.length)
        {
            if(state[e].code==action.code)
            {
                if(action.transactionType==='PURCHASE')
                {
                    i.push({...state[e],stockInHand:state[e].stockInHand+1});
                }
                else if(action.transactionType==='SALE'){
                    i.push({...state[e],stockInHand:state[e].stockInHand-1});
                }
                else {
                    i.push({...state[e]});
                }
            }
            else{
                i.push({...state[e]});
            }
            e++;
        }
        return i;
    }

    const [inventory,dispatchTransaction]=useReducer(transactionReducer,items);
return (
    <div>
        <h1>List of items</h1>
        <ul>
            {
                inventory.map((item)=>{
                    return (
                        <li key={item.code}>{item.name} ({item.stockInHand})&nbsp;&nbsp;
                        <button onClick={()=>{dispatchTransaction({code:item.code,transactionType:'PURCHASE'})}}>Purchase</button>&nbsp;&nbsp;
                        <button onClick={()=>{dispatchTransaction({code:item.code,transactionType:'SALE'})}}>Sale</button>
                        </li>
                    )
                })
            }
        </ul>

    </div>
)
}

export default AppExample18;