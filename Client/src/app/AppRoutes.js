import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Documentation = lazy(() => import('./Documentation'));
const About = lazy(() => import('./About'));
const State = lazy(() => import('./State'));

class AppRoutes extends Component {
    render() {
        return (
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/About" component={About} />
                    <Route
                        exact
                        path="/documentation"
                        component={Documentation}
                    />
                    <Route exact path="/State/:id/:name" component={State} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        );
    }
}

export default AppRoutes;
