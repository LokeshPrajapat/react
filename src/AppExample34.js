import React from "react";
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';

const AppExample34=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/" Component={HomeComponent}/>
        <Route exact path="/courses" Component={CoursesComponent}/>
        <Route exact path="/contactUs" Component={ContactUsComponent}/>
        </Routes>
        </BrowserRouter>
    )
}

const HomeComponent=()=>{
    return(
        <div>
            <Link to='/courses'>Courses</Link><br/>
            <Link to='/contactUs'>ContactUs</Link>
        </div>
    )
}

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

export default AppExample34;