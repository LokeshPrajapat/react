import React, { useState } from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar"
import { IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Menu,MenuItem,withStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const MyStyles=()=>{
    return(
        {
            appBarSpacer:{
                marginTop:"100px"
            },
            welcome:{
                fontSize:"24pt",
                weight:"bold",
                color:"red"
            }
        }
    )
}


const AppExample35=withStyles()(({classes})=>{
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={HomeComponent}></Route>
                <Route exact path="/courses" Component={CoursesComponent}></Route>
                <Route exact path="/contactUs" Component={ContactUsComponent}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
});


const HomeComponent=withStyles(MyStyles)(({classes})=>{

    const [menuAnchor,setMenuAnchor]=useState(null);
    const showMenu=(ev)=>{
        setMenuAnchor(ev.currentTarget);
    }

    const hideMenu=()=>{
        setMenuAnchor(null)
    }
    return(
        <div>
                    <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={showMenu }>
                        <MenuIcon/>
                    </IconButton>
                    
                    <Menu
                        keepMounted
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor)}
                        onClose={hideMenu}
                    >
                        <MenuItem component={Link} to='/courses'>Courses</MenuItem>
                        <MenuItem component={Link} to='/contactUs'>ContactUs</MenuItem>
                    </Menu>
                    <Typography>Thinking Machines</Typography>
                    
                    </Toolbar>
            </AppBar>
            <div className={classes.appBarSpacer}>
            <Grid container justify='center'>
                <Grid item xs={1}><div className={classes.welcome}>Welcome</div></Grid>
            </Grid>
            </div>
            </div>
    )
})

const CoursesComponent=()=>{
    return(
        <div>
            <h1>Courses</h1>
            <Link to='/'>Home</Link>
        </div>
    )
} 

const ContactUsComponent=()=>{
    return(
        <div>
            <h1>ContactUs</h1>
            <Link to='/'>Home</Link>
        </div>
    )
}


export default AppExample35;
