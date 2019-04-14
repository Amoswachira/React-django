import React from "react";
import ReactDom from "react-dom";
import "./css/bootstrap.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from "./components/App";
import Login from "./components/Login";
import Upcomingmeetups from "./components/Upcomingmeetups";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/upcommingmeetups" component={Upcomingmeetups}/>
        </div>    
    </Router>
)



ReactDom.render(routing,document.getElementById('app'));