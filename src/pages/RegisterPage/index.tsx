import React from 'react';
import loadable from '@loadable/component';

const AuthTemplate = loadable(() => import('components/auth/AuthTemplate'));
const RegisterForm = loadable(() => import('containers/auth/RegisterForm'));

const RegisterPage: React.FC = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;
