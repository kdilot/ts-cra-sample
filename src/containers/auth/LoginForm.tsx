import React from 'react';
import { useAuth, useAuthState } from 'libs/useAuth';
import loadable from '@loadable/component';

const AuthForm = loadable(() => import('components/auth/AuthForm'));

const LoginForm: React.FC = () => {
    const { login } = useAuthState();
    const { useChangeField } = useAuth();

    const OnChange = (e: any) => {
        const { value, name } = e.target;
        useChangeField({ form: 'login', key: name, value });
    };

    const OnSubmit = (e: Event) => {
        e.preventDefault();
    };

    return (
        <AuthForm
            type="login"
            form={login}
            onChange={OnChange}
            onSubmit={OnSubmit}
        />
    );
};

export default LoginForm;
