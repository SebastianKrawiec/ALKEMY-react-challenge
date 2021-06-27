import React from 'react';
import "./container.css";

import { Switch, Route } from 'react-router';

import Home from "../../pages/home/Home";
import LogIn from "../../pages/log-in/LogIn";
import AllHeroes from "../../pages/all-heroes/AllHeroes";
import Detail from "../../pages/details/Detail";


const Container = () => {
    return (
        <main className="main-container">
            {/* <div className=""></div> */}
           <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/log-in" exact>
                    <LogIn/>
                </Route>
                <Route path="/heroes-list" exact>
                    <AllHeroes/>
                </Route>
                <Route path="/heroe-detail" exact>
                    <Detail/>
                </Route>
            </Switch>
        </main>
    );
}

export default Container;
