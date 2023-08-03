import React from 'react';
import { withStyles } from '@material-ui/core';

const myStyles=()=>{
    return(
        {
            mainContainer:{
                flexGrow:1,
                color:'red'
            }
        }
    )
}

const AppExample32=({classes})=>{
    return(
        <div className={classes.mainContainer}>
            <h1>Thinking Machines</h1>
        </div>
    )
}

export default withStyles(myStyles)(AppExample32);