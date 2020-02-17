import React from 'react';
import loadable from '@loadable/component';

const AuthTemplate = loadable(() => import('components/auth/AuthTemplate'));
const LoginForm = loadable(() => import('containers/auth/LoginForm'));

const LoginPage: React.FC = () => {
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;
