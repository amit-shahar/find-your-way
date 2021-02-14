import React, {Component} from 'react';
import './Join.css';

class Join extends Component
{
    handleSubmit = (event) => {
        // TODO check data
        this.props.history.push('/');
    }

    render() {
        return (
            <div >
                <article id="joiningForm" className="br1 ba b--black-10 mv4 pa4 w-100 w-50-m w-25-l mw6 shadow-5 center tc" >
                    <main className="pa4 black-80 ">
                        <div className="measure">
                            <fieldset id="joining" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Join this amazing race!</legend>
                                <label className="db fw6 lh-copy f6" htmlFor="name">So, who are you joining with?</label>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={()=>this.handleSubmit()}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Join"
                                />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default Join;

// return (<Join onRouteChange={this.onRouteChange} userId={this.state.userID} userName={this.state.userName}/>);