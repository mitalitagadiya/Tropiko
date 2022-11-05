import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { dLogin } from '../Utilits/index';


function PublicRoute({ component: Component, resticted = false, ...rest }) {
    return (
        <Route  {...rest} render={props => (
            dLogin() && resticted ?
                <Redirect to="/" />
            :
                <Component {...props} />
        )}

        />
    );
}

export default PublicRoute;