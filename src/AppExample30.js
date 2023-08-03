import React from 'react';
import { withStyles } from '@material-ui/core/styles';    
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip"
const lookAndFeel=()=>{
    return({
        mainContainer:{
            border:"1px solid red",
            padding:"10px",
            margin:"10px",
            flexGrow:1
        },
        paper:{
            padding:"5px",
            color:"magenta",    
            border:"1px solid green"
        }
    })
}

const AppExample30=withStyles(lookAndFeel)(({classes,justify})=>{
    return(
        <div className={classes.mainContainer}> 
            {/* <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>1</Paper>
                </Grid>
           
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>3</Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>4</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>5</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>6</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>7</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>8</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>9</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>10</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>11</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>12</Paper>
                </Grid>
                </Grid> */}

            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justify={justify}>
                            <Grid><Chip label='1'/></Grid>
                            <Grid><Chip label='2'/></Grid>
                            <Grid><Chip label='3'/></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justify={'space-around'}>
                            <Grid><Chip label='4'/></Grid>
                            <Grid><Chip label='5'/></Grid>
                            <Grid><Chip label='6'/></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justify='center'>
                            <Grid><Chip label='7'/></Grid>
                            <Grid><Chip label='8'/></Grid>
                            <Grid><Chip label='9'/></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Grid container justify='space-between'>
                            <Grid><Chip label='10'/></Grid>
                            <Grid><Chip label='11'/></Grid>
                            <Grid><Chip label='12'/></Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        </div>  
    )
});

export default AppExample30;