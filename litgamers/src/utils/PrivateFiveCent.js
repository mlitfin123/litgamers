import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getTokenForGame } from './Common';

// handle the private routes
function PrivateFiveCent({ component: Component, ...rest }) {
    
    return (
        <Route
        {...rest}
        render={(props) => getTokenForGame() ? <Component {...props} /> : <Redirect to={{ pathname: '/fivecent', state: { from: props.location } }} />}
        />
    )
}

export default PrivateFiveCent;