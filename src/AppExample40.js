import React, { useState } from 'react';
import AppExample39 from './AppExample39';
import { Accordion, AccordionDetails, AccordionSummary, Typography, withStyles } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const myStyles=(theme)=>{
    return(
        {
            mainContainer:{
                flexGrow:1
            }
        }
    )
}

const AppExample40=withStyles(myStyles)((props)=>{
    const [expandedAccordion,setExpandedAccordion]=useState(0);
    const onAccordionStateChange=(idx,ex)=>{
        setExpandedAccordion(idx);
        console.log(ex+" "+idx);
    }

    return(
        <div className={props.classes.mainContainer}>
            <Accordion key={0} expanded={expandedAccordion==0} onChange={(ev,ex)=>{onAccordionStateChange(0,ex)}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>Courses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        C<br/>
                        C++<br></br>
                        Java<br/>
                        J2EE<br/>
                        Python<br/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion key={1} expanded={expandedAccordion==1} onChange={(ev,ex)=>{onAccordionStateChange(1,ex)}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>ContactUs</AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    78 PhuspKunj Colony, Itawa,Dewas
                    
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
})

export default AppExample40;