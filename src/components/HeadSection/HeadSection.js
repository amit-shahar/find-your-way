import React from 'react';
import './HeadSection.css';
const HeadSection = (props) => {
    return (
        <div id="head" className={'paddingTop:200px'}>
            {props.children}
        </div>
    );
}

export default HeadSection;