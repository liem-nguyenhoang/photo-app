import React from 'react';
import { Switch, useRouteMatch } from 'react-router';
import { Route } from "react-router-dom";
import NotFound from '../../components/NotFound';
import AddEditPage from './Pages/AddEdit';
import MainPage from './Pages/Main';

Photo.propTypes = {};

function Photo(props) {
    const match = useRouteMatch()
    console.log({ match })
    return (
        <Switch >
            <Route exact path={match.url} component={MainPage} />

            <Route exact path={`${match.url}/add`} component={AddEditPage} />
            <Route exact path={`${match.url}/:photoId`} component={AddEditPage} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;
