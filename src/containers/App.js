import React, {Component} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Theme from "../components/Theme/Theme";
import Details from "../components/Details/Details";
import WhosIn from "../components/WhosIn/WhosIn";
import Scroll from "../components/WhosIn/Scroll";
import Join from "../components/Join/Join";
import { users } from '../users'


class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         users: []
    //     }
    // }
    //
    // componentDidMount() {
    //     fetch('./users.js')
    //         .then(response => response.json())
    //         .then(users => {this.setState({ users:users })})
    // }

    render() {
    // const { users } = this.state;

        return (
            <div className="App">
                <Navigation />
                <Theme />
                <Details />
                <Join />
                <Scroll>
                    <WhosIn users= { users } />
                </Scroll>
            </div>
        );
    }
}

export default App;

