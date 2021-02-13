import React from 'react';
import './ParticipantsSection.css';

const ParticipantsSection = (props) => {
    return (
        <div id="participants" className={'paddingTop:20px'}>
            {props.children}
        </div>
    );
}

export default ParticipantsSection;