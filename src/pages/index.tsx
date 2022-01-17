import React, { lazy, ReactElement, Suspense } from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

export const AppPages = (): ReactElement => {

    const Home = lazy(() => import('./home').then((module) => ({ default: module.HomePage })));
    const AddTheme = lazy(() => import('./add-page').then((module) => ({ default: module.AddThemePage })));
    const EditTheme = lazy(() => import('./edit-page').then((module) => ({ default: module.EditThemePage })));
    const ExamplePage = lazy(() => import('./example').then((module) => ({ default: module.ExamplePage })));
    const NotFound = lazy(() => import('./not-found').then((module) => ({ default: module.NotFoundPage })));

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/add-theme' component={AddTheme} />
                    <Route exact path='/edit-theme/:id' component={EditTheme} />
                    <Route exact path='/example' component={ExamplePage} />
                    <Route exact path='/not-found' component={NotFound} />
                    <Redirect from='*' to='/not-found' />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};
