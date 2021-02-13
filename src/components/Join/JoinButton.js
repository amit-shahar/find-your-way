import React from 'react';

const JoinButton = ({onRouteChange}) => {

    return (
        <nav style={{display: 'flex', justifyContent: 'center', paddingTop: '40px'}}>
            <button
                onClick={()=>onRouteChange('joining')}
                className="f3 f2-ns grow no-underline br-pill ph4 pv3 mb2 dib white bg-blue"
            >JOIN TODAY!
            </button>
        </nav>
    );
}

export default JoinButton;