import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from "../Home/Home";
import Join from "../Joining/Join";
import Signin from "../Signin/Signin";
import Register from "../Register/Register";
import NavigateRouter from "../../components/NavigateRouter/NavigateRouter";
import {users} from "../../users";

class App extends Component {

    constructor() {
        super();
        this.state = {
            loggedInStatus: true,
            user: {}
        };
    }

    // onRouteChange = (route, user, loggedInStatus) => {
    //     this.setState({route: route});
    //     this.setState({user: user});
    //     this.setState({loggedInStatus: loggedInStatus});
    // }

    render() {
        return(
            <div className="app">
                <BrowserRouter>
                        <Switch>
                            <Route exact path={"/"}
                                   render={props =>
                                       (<Home {...props} loggedInStatus={this.state.loggedInStatus} />)}
                            />
                            <Route exact path="/signin"
                                   render={props =>
                                       (<Signin {...props} loggedInStatus={this.state.loggedInStatus} />)}
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

