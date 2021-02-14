import React, {Component} from 'react';
import './Register.css';

class Register extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            password: "",
            registrationErrors: ""
        };
    }

    handleSubmit = (event) => {
        // TODO check data
        this.props.history.push('/signin');
    }

    render() {
        return (
            <div className= "register" >
                <article id="registerForm" className="br1 ba b--black-10 mv4 pa4 w-100 w-50-m w-25-l mw6 shadow-5 center tc">
                    <main className="pa4 black-80 ">
                        <div className="measure">
                            <fieldset id="register" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <legend className="f6 fw6 ph0 mh0">It's super easy and not secure at all!</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Enter your name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="text" name="name" id="name"/>
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Enter your Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="email" name="email" id="email"/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Choose your Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="password" name="password" id="password"/>
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={()=>this.handleSubmit()}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="That's is, Register"
                                />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default Register;

// return (<Register onRouteChange={this.onRouteChange}/>);