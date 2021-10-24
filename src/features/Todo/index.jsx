import NotFound from 'components/NotFound';
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';


TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>

            To do share ui

            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;