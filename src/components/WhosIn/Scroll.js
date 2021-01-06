import React from 'react';

const Scroll = (props) => {
    return (
        <div className={'tc '} style={{ overflow: 'scroll hidden', border: '5px solid black', height: '800px', backgroundColor:'rgba(255,255,255,0.3)'}}>
            {props.children}
        </div>
    );
};

export default Scroll;