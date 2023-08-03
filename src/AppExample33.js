import React, { useState } from "react";
import {withStyles} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
const MyStyles=()=>{
    return({
        mainContainer:{
            flexGrow:1
        }
    })
}

const AppExample33=({classes})=>{
    const [anchorForMenu,setAnchorForMenu]=useState(null);
    const menuClickHandler=(ev)=>{
        setAnchorForMenu(ev.currentTarget);
    }
    const menuCloseHandler=()=>{
        setAnchorForMenu(null);
    }
        return(
        <div className={classes.mainContainer}>
           <AppBar>
            <Toolbar>
                <IconButton color="inherit" onClick={menuClickHandler}>
                    <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorForMenu}
                    open={anchorForMenu}
                    onClose={menuCloseHandler}
                    >
                    <MenuItem>Option1</MenuItem>
                    <MenuItem>Option2</MenuItem>
                    <MenuItem>Option3</MenuItem>
                </Menu>
            </Toolbar>
           </AppBar>
                
            
        </div>
    )
}

export default withStyles(MyStyles)(AppExample33);