import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "../Home/Home";
import Join from "../Join/Join";
import Signin from "../Signin/Signin";
import Register from "../Register/Register";

class App extends Component {

    constructor() {
        super();
        this.state = {
            loggedInStatus: false,
            user: {},
            route: 'home'
        };
    }

    handleLogin = (data) => {
        // TODO complete login process
        this.setState(
            {
                loggedInStatus: true,
                user: data.user
            }
        );
    }


    render() {

        return(
            <div className="app">
                <BrowserRouter>
                        <Switch>
                            <Route exact path={"/"}

                                   render={

                                       props =>
                                       (<Home {...props}
                                              loggedInStatus={this.state.loggedInStatus}
                                              user = {this.user}
                                       />)}
                            />
                            <Route exact path="/signin"
                                   render={props =>
                                       (<Signin {...props} loggedInStatus={this.state.loggedInStatus} onRouteChange={this.onRouteChange} />)}
                            />
                            <Route exact path="/register"
                                   render={props =>
                                       (<Register {...props} loggedInStatus={this.state.loggedInStatus} />)}
                            />
                            <Route exact path="/join"
                                   render={props =>
                                       (<Join {...props} loggedInStatus={this.state.loggedInStatus} />)}
                            />
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

