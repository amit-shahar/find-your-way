import React from "react";
import './Theme.css'
import image from './themePhoto.jpg'

const Theme = () => {
    return (
        <div >
            <p className="f2" style={{display: 'flex',justifyContent: 'center'}}>
                {'Orienteering Race!'}
            </p>
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <img alt='' src={image} width='300px' height='auto'/>
            </div>
        </div>
    )
}

export default Theme;

// <div>
//     <nav style={{display: 'flex', justifyContent: 'center'}}>
//         <p>Location: Ben Shemen Forest</p>
//     </nav>
//     <nav style={{display: 'flex', justifyContent: 'center'}}>
//         <p>Date: 4/3/2021</p>
//     </nav>
//     <nav style={{display: 'flex', justifyContent: 'center'}}>
//         <p>Entry fee: 0 !!!</p>
//     </nav>
// </div>