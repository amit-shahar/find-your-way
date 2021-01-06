import React from "react";

const Navigation = () => {
    return (
        <nav style={{padding: '5px'}}>
            <button className='f5 grow no-underline br-pill ph3 pv2 mb2 dib black bg-white-70' style={{ float:"left"}}>Back</button>
            {/*<a className='f3  black pa3 ' style={{padding:'40px'}}></a>*/}
            <a className='f3 link dim black pa3 pointer pl5' >Home</a>
            <a className='f3  black pa3 ' style={{padding:'10px'}}>|</a>
            <a className='f3 link dim black pa3 pointer' >Join</a>
            {/*<a className='f3  black pa3 ' style={{padding:'10px'}}>|</a>*/}
            {/*<a className='f3 link dim black pa3 pointer' style={{padding:'20px'}}>About</a>*/}
            <button className='f5 grow no-underline br-pill ph3 pv2 mb2 dib black bg-white-70' style={{ float:"right"}}>Sign Out</button>
        </nav>
    )
}
export default Navigation;
