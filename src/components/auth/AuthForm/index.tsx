import React from 'react';
import { AuthFormBlock, Footer, InputBox, ButtonForm } from './styles';
import { Link } from 'react-router-dom';

interface Props {
    type: string;
}

const typeMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm: React.FC<Props> = ({ type }) => {
    const text = typeMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <InputBox
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                />
                <InputBox
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                {type === 'register' && (
                    <InputBox
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
                <ButtonForm fullWidth>{text}</ButtonForm>
            </form>
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
