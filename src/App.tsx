import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const LoginPage = loadable(() => import('pages/LoginPage'));
const RegisterPage = loadable(() => import('pages/RegisterPage'));
const WritePage = loadable(() => import('pages/WritePage'));
const PostPage = loadable(() => import('pages/PostPage'));
const PostListPage = loadable(() => import('pages/PostListPage'));
const ErrorPage = loadable(() => import('pages/ErrorPage'));

const App: React.FC = () => {
    return (
        <Switch>
            <Route path={['/@:username', '/']} component={PostListPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/write" component={WritePage} />
            <Route path="/@:username/:postId" component={PostPage} />
            <Route path="/404" component={ErrorPage} />
            <Route component={ErrorPage} />
        </Switch>
    );
};

export default App;
