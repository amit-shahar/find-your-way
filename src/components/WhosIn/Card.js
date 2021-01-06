import React from 'react';

const Card = ({ name , imgSrc }) => {
    return (
        <div className={'tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5' }>
            <img alt='profilePhoto' src= { 'https://robohash.org/' + imgSrc + '?size=100x100' } />
            <h2> { name }</h2>
        </div>
    );
}

export default Card;