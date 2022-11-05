import React from 'react';
import { dLogin } from '../Utilits/index';

import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <div>
            <Route {...rest} render={props => (
                dLogin() ?
                    <Component {...props} />
                    :
                    <Redirect to="/Login_signup" />
            )}

            />
        </div>
    );
}

export default PrivateRoute;