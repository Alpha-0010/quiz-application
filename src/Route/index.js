import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Step1 from "./Step1";

const Routes = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Step1 />
            </Route>

        </Switch>
        </BrowserRouter>
    );
};

export default Routes;