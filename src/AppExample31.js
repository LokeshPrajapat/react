import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid  from "@material-ui/core/Grid";
import Typography  from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const myStyles=()=>{
    return(
        {
            mainContainer:{
                flexGrow:1
            }
        }
    )
}

const AppExample31=withStyles(myStyles)(({classes})=>{
    return(
        <div className={classes.mainContainer}>
            <Grid container spacing={6}>
                <Grid item xs={3} >
                    <Grid container spacing={4} direction="column"> 
                        <Grid item>
                            <Paper>1 Ujjain</Paper>
                        </Grid>
                        <Grid item>
                            <Paper>2 Indore</Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} >
                    <Grid container spacing={4} direction="column"> 
                        <Grid item>
                            <Paper>3 Dewas</Paper>
                        </Grid>
                        <Grid item>
                            <Paper>4 Ratlam</Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} >
                    <Grid container spacing={4} direction="column"> 
                        <Grid item>
                            <Paper>5 Bhopal</Paper>
                        </Grid>
                        <Grid item>
                            <Paper>5 Gwalior</Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} >
                    <Grid container spacing={4} direction="column"> 
                        <Grid item>
                            <Paper>7 Rau</Paper>
                        </Grid>
                        <Grid item>
                            <Paper>8 Rajgarh</Paper>
                        </Grid>
                    </Grid>
                </Grid>            
            </Grid>
        </div>
    )
});

export default AppExample31;