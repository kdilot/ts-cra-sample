import React from 'react';
import {
    AuthFormBlock,
    Footer,
    InputBox,
    ButtonForm,
    ErrorForm,
} from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface Props {
    type: string;
    form: any;
    onChange: any;
    onSubmit: any;
}

const typeMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm: React.FC<Props> = ({ type, form, onChange, onSubmit }) => {
    const { auth } = useSelector((state: any) => state);
    const text = typeMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <InputBox
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.username}
                />
                <InputBox
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <InputBox
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}
                <ButtonForm fullWidth>{text}</ButtonForm>
            </form>
            <ErrorForm>{auth.authError}</ErrorForm>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
