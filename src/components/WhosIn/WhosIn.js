import React from "react";
import Card from "./Card";

const WhosIn = ({ users }) => {

    return (
        <div>
            <div className='tc' style={{justifyContent: 'center'}}>
                    <p className="f2 f1-ns flex justify-center white " style={{fontFamily:'Roboto Slab'}}>
                        {'Who\'s in already?'}
                    </p>
                {
                    users.map((name,i) => {
                        return (
                            <Card
                                name={ users[i].name }
                                imgSrc={ users[i].imgSrc }
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default WhosIn;

