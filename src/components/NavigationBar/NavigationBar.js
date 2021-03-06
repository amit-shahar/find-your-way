import React from "react";

const NavigationBar = ({user, loggedInStatus, onRouteChange}) => {

    return (
        <nav className="fixed top-0 pa2 w-100 fr " style={{backgroundColor:'rgba(150,210,130,0.4)', zIndex:100}}>

            <label className='f5 f3-ns link dim black b--black pa2 dib pointer'  >Home</label>
            <label className='f5 f3-ns black pa2' style={{padding:'10px'}}>|</label>
            <label className='f5 f3-ns link dim black b--black pa2 pr4 dib pointer' style={{textShadow:'none'}}
                onClick={()=>onRouteChange('join')}
                >Join
            </label>

            <div className='fr '>
                {loggedInStatus === true
                    ?
                        <nav>
                            <label className='pa2 f3'>Hi {user}!</label>
                            <button className='f6 f5-ns grow no-underline br-pill ph3 pv2 mb2 black bg-white-70 dib pointer'
                                    onClick={() => onRouteChange('home')}
                            >Sign Out
                            </button>
                        </nav>
                    :
                        <nav>
                            <button className='f6 f5-ns grow no-underline br-pill ph3 pv2 mb2 black bg-white-70 dib pointer'
                                    onClick={() => onRouteChange('signin')}
                            >Sign In
                            </button>

                            <button className='f6 f5-ns grow no-underline br-pill ph3 pv2 mb2 black bg-white-70 dib pointer'
                                    onClick={() => onRouteChange('register')}
                            >Register
                            </button>
                        </nav>
                }
            </div>
        </nav>
    );//gg
}
export default NavigationBar;