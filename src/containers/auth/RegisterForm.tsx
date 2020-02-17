import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, register, changeField } from 'reducers/auth';
import { withRouter } from 'react-router-dom';

const AuthForm = loadable(() => import('components/auth/AuthForm'));

const RegisterForm: React.FC<any> = ({ history }) => {
    const state = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    const OnChange = (e: any) => {
        const { value, name } = e.target;
        dispatch(changeField({ form: 'register', key: name, value }));
    };

    const OnSubmit = (e: Event) => {
        const { username, password, passwordConfirm }: any = state.register;
        e.preventDefault();
        if (!username || !password || !passwordConfirm) {
            alert('입력 값을 확인하세요.');
            return;
        } else if (password !== passwordConfirm) {
            alert('비밀번호가 다릅니다.');
            return;
        }
        dispatch(register({ username, password }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (state.auth) {
            history.push('/');
        }
    }, [history, state.auth]);

    return (
        <AuthForm
            type="register"
            form={register}
            onChange={OnChange}
            onSubmit={OnSubmit}
        />
    );
};

export default withRouter(RegisterForm);
