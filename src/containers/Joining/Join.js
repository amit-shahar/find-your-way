import React, {Component} from 'react';
import './Join.css';
import Home from "../Home/Home";
import {BrowserRouter, Route} from "react-router-dom";

class Join extends Component
{
    render() {
        return (
            <div id="page">
                <article id="joiningForm" className="br1 ba b--black-10 mv4 pa4 w-100 w-50-m w-25-l mw6 shadow-5 center tc" >
                    <main className="pa4 black-80 ">
                        <form className="measure">
                            <fieldset id="joining" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">JoinButton this amazing race!</legend>
                                <label className="db fw6 lh-copy f6" htmlFor="name">So, who are you joining with?</label>
                            </fieldset>
                            <div className="">
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="JoinButton"
                                />
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}
export default Join;

// return (<Join onRouteChange={this.onRouteChange} userId={this.state.userID} userName={this.state.userName}/>);