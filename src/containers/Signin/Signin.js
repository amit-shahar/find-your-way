import React, {Component} from 'react';
import './Signin.css';

const Signin = ({onRouteChange}) =>
{
    return (
        <div id="pageSignin">
            <article id="signinForm" className="br1 ba b--black-10 mv4 pa4 w-100 w-50-m w-25-l mw6 shadow-5 center tc" >
                <main className="pa4 black-80 ">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Your Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="email" name="email" id="email"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Your Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="pa3">
                            <input
                                onClick={() => onRouteChange('home','NAME',false)}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib "
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <text>If you don't have an account yet, feel free to <p onClick={()=>onRouteChange('register')} className="f3 link dim black db pointer">Register</p></text>
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
}

export default Signin;

