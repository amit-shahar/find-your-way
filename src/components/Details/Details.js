import React from "react";
import './Details.css'


const Details = () => {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                <p>Location: Ben Shemen Forest</p>
            </nav>
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                <p>Date: 4/3/2021</p>
            </nav>
           <nav style={{display: 'flex', justifyContent: 'center'}}>
                <p>Entry fee: 0 !!!</p>
            </nav>
        </div>
    )
}

export default Details;