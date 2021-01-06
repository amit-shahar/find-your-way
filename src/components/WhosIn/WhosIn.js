import React from "react";
import Card from "./Card";

const WhosIn = ({ users }) => {

    return (
        <div>
            <div style={{justifyContent: 'center'}}>
                    <p className="f2" style={{display: 'flex', justifyContent: 'center'}}>
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

