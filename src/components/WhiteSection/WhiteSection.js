import React from 'react';

const WhiteSection = (props) => {
    return (
        <div id="white" className={'pa4'} style={{backgroundColor: 'rgba(150,210,130,0.8)'}}>
            {props.children}
        </div>
    );
}

export default WhiteSection;