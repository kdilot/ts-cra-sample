import React from 'react';
import loadable from '@loadable/component';

const AuthTemplate = loadable(() => import('components/auth/AuthTemplate'));
const AuthForm = loadable(() => import('components/auth/AuthForm'));

const LoginPage: React.FC = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};

export default LoginPage;
