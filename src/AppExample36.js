import React, { useState } from  'react';
import { Grid, Icon, Typography, withStyles } from '@material-ui/core';
import { IconButton,AppBar,Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


const MyStyles=(theme)=>{
    return(
        {
            mainContainer:{
                flexGrow:1
            },
            appBarSpacer:{
                marginTop:"70px"
            },
            welCome:{
                fontSize:"24pt",
                weight:"bold",
                color:"blue"
            }
        }
    )
}

const AppExample36=withStyles(MyStyles)(({classes})=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={HomeComponent}/>
                <Route exact path='/courses' Component={CourseComponent}/>
                <Route exact path='contactUs' Component={ContactUsComponent}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
});


const AppBarComponent=withStyles(MyStyles)((props)=>{

    const [menuAnchor,setMenuAnchor]=useState(null);

    const showMenu=(ev)=>{
        setMenuAnchor(ev.currentTarget);
    }
    const hideMenu=()=>{
        setMenuAnchor(null);
    }

    return(
        
            <AppBar>
                <Toolbar>
                    <IconButton color='inherit' onClick={showMenu}>
                        <MenuIcon>
                        </MenuIcon>
                        
                    </IconButton>
                    <Menu
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor)}
                        onClose={hideMenu}
                    >
                        {props.heading!="Home" && <MenuItem component={Link} to="/">Home</MenuItem>}
                        {props.heading!="Courses" && <MenuItem component={Link} to='/courses'>Courses</MenuItem>}
                    {props.heading!="ContactUs" && <MenuItem component={Link} to='/contactUs'>ContactUs</MenuItem>}
                    </Menu>
                    <Typography>Thinking Machines - {props.heading}</Typography>
                </Toolbar>
            </AppBar>
      
    )
})

const HomeComponent=withStyles(MyStyles)(({classes})=>{
    return(
        <div >
            <AppBarComponent heading='Home'/>
            <div className={classes.appBarSpacer}>
            <Grid container  justify='center'>
                <Grid item xs={1}><div className={classes.welCome}>Welcome</div></Grid>
            </Grid>
        </div>
        </div>
    )
});

const CourseComponent=withStyles(MyStyles)(({classes})=>{
    return(
        <div>
            <AppBarComponent heading='Courses'/>
            <div className={classes.appBarSpacer}>
                <Link to='/' >Home</Link>
            </div>
        </div>
    )
})

const ContactUsComponent=withStyles(MyStyles)(({classes})=>{
    return(
        <div>
            <AppBarComponent heading='ContactUs'/>
            <div className={classes.appBarSpacer}>
                <Link to='/' >Home</Link>
            </div>
        </div>
    )
})


export default AppExample36;