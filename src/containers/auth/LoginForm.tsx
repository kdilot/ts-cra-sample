import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, login, changeField } from 'reducers/auth';
import { withRouter } from 'react-router-dom';

const AuthForm = loadable(() => import('components/auth/AuthForm'));

const LoginForm: React.FC<any> = ({ history }) => {
    const state = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const OnChange = (e: any) => {
        const { value, name } = e.target;
        dispatch(changeField({ form: 'login', key: name, value }));
    };

    const OnSubmit = (e: Event) => {
        const { username, password }: any = state.login;
        e.preventDefault();
        if (!username || !password) {
            alert('입력 값을 확인하세요.');
            return;
        }
        dispatch(login({ username, password }));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (state.auth) {
            history.push('/');
        }
    }, [history, state.auth]);

    return (
        <AuthForm
            type="login"
            form={login}
            onChange={OnChange}
            onSubmit={OnSubmit}
        />
    );
};

export default withRouter(LoginForm);
