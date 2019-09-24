import React from 'react';

import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArticlePage from '../pages/ArticlePage';
import ContactPage from '../pages/ContactPage';
import Harmonogram from '../pages/HarmonogramPage';
import GuestsPage from '../pages/GuestsPage';
import RegistrationPage from '../pages/RegistrationPage'
import PreviousPage from '../pages/PreviousPage'
import ErrorPage from '../pages/ErrorPage';
// import Article from './Article.js';
const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/articles" exact component={ArticlePage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/guests" exact component={GuestsPage} />
                <Route path="/harmonogram" exact component={Harmonogram} />
                <Route path="/previous" exact component={PreviousPage} />
                <Route path="/registration" exact component={RegistrationPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>

    );
}

export default Page;
