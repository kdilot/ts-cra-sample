import React from 'react';
import loadable from '@loadable/component';

const AuthTemplate = loadable(() => import('components/auth/AuthTemplate'));
const AuthForm = loadable(() => import('components/auth/AuthForm'));

const RegisterPage: React.FC = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default RegisterPage;
