import React from 'react';

import {NavLink} from "react-router-dom";

const NavigateRouter = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/join">Join</NavLink>
        </div>
    );
}

export default NavigateRouter;