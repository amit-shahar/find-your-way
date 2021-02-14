import React, {Component} from 'react';
import './Home.css';
import HeadSection from "../../components/HeadSection/HeadSection";
import Theme from "../../components/Theme/Theme";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import WhiteSection from "../../components/WhiteSection/WhiteSection";
import Details from "../../components/Details/Details";
import JoinButton from "../../components/JoinButton/JoinButton";
import ParticipantsSection from "../../components/ParticipantsSection/ParticipantsSection";
import WhosIn from "../../components/WhosIn/WhosIn";
import { users } from "../../users";

class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            users: users
        };
    }

    componentDidMount() {
        fetch('./users.js')
            .then(response => response.json())
            .then(users => {this.setState({ users:users })})
    }

    onRouteChange = (route) => {
        // TODO check data
        if (route === 'join')
            this.props.history.push('/join');
        else if (route === 'signin')
            this.props.history.push('/signin');
        else if (route === 'register')
            this.props.history.push('/register');
    }

    render()
    {
        if (this.state.users.length === 0) // Loading users
            return (
                <div className="Loading">
                    <HeadSection>
                        <h1>Loading</h1>
                        <Theme/>
                    </HeadSection>
                </div>
            );

        else return (
            <div className="Home">
                <HeadSection>
                    <NavigationBar user={this.props.user} loggedInStatus={this.props.loggedInStatus} onRouteChange={this.onRouteChange}/>
                    <Theme/>
                </HeadSection>
                <WhiteSection>
                    <Details/>
                    <JoinButton onRouteChange={this.onRouteChange}/>
                </WhiteSection>
                <ParticipantsSection>
                    <WhosIn users={this.state.users}/>
                </ParticipantsSection>
            </div>
        );
    }
}

export default Home;