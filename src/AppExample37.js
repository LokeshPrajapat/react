import { AppBar, Toolbar, Typography, withStyles, Button, Drawer ,List,ListItem} from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import React, { useState } from "react";

const myStyles = (theme) => {
    return {
        mainContainer: {
            flexGrow: 1
        },
        appBarSpacer: {
            marginTop: "80px"
        },
        contentSection: {
            color: "blue"
        },
        appBar:{
            zIndex:theme.zIndex.drawer+1000
        }
    }
}

const AppExample37 = (props) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const openDrawer = () => {
        setShowDrawer(true);
    }
    const closeDrawer = () => {
        setShowDrawer(false);
    }
    return (
        <div className={props.classes.mainContainer}>
            <AppBar className={props.classes.appBar}>
                <Toolbar>
                    <Typography>Thinking Machines</Typography>
                </Toolbar>
            </AppBar>
            <div>
                <div className={props.classes.appBarSpacer}>
                    <Grid container justifyContent="center">
                        <Grid item >
                            <Button onClick={openDrawer}>Open Drawer</Button>
                            <Button onClick={closeDrawer}>Close Drawer  </Button>
                        </Grid>
                        <Grid item>
                            <Drawer 
                                open={showDrawer}
                                variant='persistent'
                                onClose={closeDrawer}
                            >
                                <Toolbar/>
                                <List>
                                    <ListItem>
                                        Option 1
                                    </ListItem>
                                </List>
                            </Drawer>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default withStyles(myStyles)(AppExample37);