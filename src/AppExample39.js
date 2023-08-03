import { AppBar, IconButton, Toolbar, withStyles,Drawer,Tabs,Tab,List,ListItem,Grid,Typography, ListItemText} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import { useState } from "react";
const myStyles=(theme)=>{
    return(
        {
            mainContainer:{
                flecGrow:1
            },
            appBarSpacer:{
                marginTop:"80px"
            },
            contentSection:{
                color:"blue"
            },
            appBar:{
                zIndex:theme.zIndex.drawer+1000
            }
        }
    )
}

const AppExample39=withStyles(myStyles)((props)=>{
    const [tabIndex,setTabIndex]=useState(0);
    const [RouteComponent,setRouteComponent]=useState(HomeComponent);
    const [showDrawer,setShowDrawer]=useState(false);

    const tabChange=(ev,val)=>{
        if(val==tabIndex) return;
        setTabIndex(val);
        if(val==0) setRouteComponent(HomeComponent);
        else if(val==1) setRouteComponent(CourseComponent);
        else if(val==2) setRouteComponent(ContactUsComponent);
    }

    const toggleDrawer=()=>{
        setShowDrawer(!showDrawer);
    }

    return (
        <div className={props.classes.mainContainer}>
        
            <AppBar className={props.classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDrawer}>
                    <MenuIcon/> 
                    </IconButton >
                    <Tabs value={tabIndex} onChange={tabChange}>
                        <Tab label="Home"/>
                        <Tab label="Courses"/>
                        <Tab label="Contact Us"/>
                    </Tabs>
                </Toolbar>
            </AppBar>
            
        <div className={props.classes.appBarSpacer}>
        <BrowserRouter>
            <Routes>
            <Route path="/" exact Component={RouteComponent}></Route>
        </Routes>
        </BrowserRouter>
        </div>
        <Drawer 
            open={showDrawer}
            variant="temporary"
            onClose={toggleDrawer}
        >
            <List onClick={toggleDrawer}>
                <ListItem>
                    <Toolbar/>
                </ListItem>
                <ListItem  onClick={()=>{setTabIndex(0); setRouteComponent(HomeComponent);}}>
                    <ListItemText >Home</ListItemText>
                </ListItem>
                <ListItem onClick={()=>{setTabIndex(1); setRouteComponent(CourseComponent);}}>
                    <ListItemText > Courses</ListItemText>
                </ListItem>
                <ListItem onClick={()=>{setTabIndex(2); setRouteComponent(ContactUsComponent);}}>
                   <ListItemText>ContactUs</ListItemText>
                </ListItem>
            </List>
        </Drawer>
        </div>

    )
});

const HomeComponent=withStyles(myStyles)((props)=>{
    return(
        <div>
          <Grid container justify="center">
            <Grid item xs={1}>
                <Typography>Welcome</Typography> 
            </Grid>
          </Grid>
        </div>
    )
})

const CourseComponent=withStyles(myStyles)((props)=>{
    return(
    <Grid container justify="center">
    <Grid item xs={1}>
        <Typography>Courses</Typography> 
    </Grid>
  </Grid>
    )
});

const ContactUsComponent=withStyles(myStyles)((props)=>{
    return(
        <Grid container justify="center">
        <Grid item xs={1}>
            <Typography>Contact Us</Typography> 
        </Grid>
      </Grid>
    )
});

export default AppExample39;