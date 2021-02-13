import React from 'react';

const Card = ({ name , imgSrc }) => {
    return (
        <div className='tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='profilePhoto' src= { 'https://robohash.org/' + imgSrc + '?size=100x100' } />
            <p className='black f6 f4-ns' style={{textShadow:'none'}}> { name }</p>
        </div>
    );
}

export default Card;