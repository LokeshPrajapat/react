import React, { createContext, useContext, useState } from "react";
import { Typography, withStyles,AppBar,Toolbar, ListItem ,Drawer,List, IconButton, Menu, MenuItem} from "@material-ui/core";
import {Routes,Route,Link} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"



const myStyles=(theme)=>{
    return(
        {
            mainContainer:{
                flexGrow:1
            },
            appBarSpacer:theme.mixins.tollbar,
            contentSection:{
                color:"blue"
            },
            appBar:{
                zIndex:theme.zIndex.drawer+1000
            }
        }
    )
}
const MyContext=createContext();
const AppExample38=withStyles(myStyles)((props)=>{
    const [showDrawer,setShowDrawer]=useState(false);

    return(
        <MyContext.Provider value={{showDrawer,setShowDrawer}}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/courses" Component={Courses}/>
                <Route exact path="contactUs" Component={ContactUs}></Route> 
            </Routes>
        </BrowserRouter>
        </MyContext.Provider>
    )
});

const AppBarComponent=withStyles(myStyles)((props)=>{
    const {showDrawer,setShowDrawer}=useContext(MyContext);
    const ToggleDrawer=()=>{
        setShowDrawer(!showDrawer);
    }
    return(
        <div>
        <AppBar className={props.classes.appBar}>
            <Toolbar>
                <IconButton color='inherit' onClick={ToggleDrawer}>
                    <MenuIcon/>
                </IconButton>
                
                <Typography>Thinking Machines - {props.heading}</Typography>
            </Toolbar>
        </AppBar>
        <DrawerComponent heading={props.heading}/>
        </div>
    )
});

const DrawerComponent=withStyles(myStyles)((props)=>{
    const {showDrawer,setShowDrawer}=useContext(MyContext);
    const closeDrawer=()=>{
        setShowDrawer(false);
    }
    return(
        <div>
            <Drawer 
            open={showDrawer}
            variant='persistent'
            onClose={closeDrawer}
            > 
              <List onClick={closeDrawer}>
                <ListItem>
                <Toolbar/> 
                </ListItem>
                {props.heading!='Home' &&
                <ListItem component={Link} to='/'>
                    Home   
                </ListItem>
                }
                {props.heading!="Courses" && 
                <ListItem component={Link} to='/courses'>
                    Courses   
                </ListItem>}
                {props.heading!="ContactUs" && 
                <ListItem component={Link} to='/contactUs'>
                    ContactUs
                </ListItem>
                }
              </List>
            </Drawer>
        </div>
    )
});

const Home=withStyles(myStyles)((props)=>{
    return(
        <div>
            <AppBarComponent heading="Home"/>
          
        </div>
    )
});

const Courses=withStyles(myStyles)((props)=>{
    return(
        <div>
            <AppBarComponent heading="Courses"/>
        </div>
    )
});

const ContactUs=withStyles(myStyles)((props)=>{
    return(
        <div>
            <AppBarComponent heading="ContactUs"/>
        </div>
    )
});
export default AppExample38;