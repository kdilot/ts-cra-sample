import React from 'react';
import { HeaderBlock, Logo, Right, Spacer, Wrapper, UserInfo } from './styles';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';

interface Props {
    hash: object | any;
    onLogout: () => void;
}
const Button = loadable(() => import('components/common/Button'));

const Responsive: React.FC<Props> = ({ hash, onLogout }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Logo>
                        <Link to="/">TRIZ</Link>
                    </Logo>
                    {Object.keys(hash).length ? (
                        <Right>
                            <UserInfo>{hash.username}</UserInfo>
                            <Button onClick={onLogout}>로그아웃</Button>
                        </Right>
                    ) : (
                        <Right>
                            <Button to="login">로그인</Button>
                        </Right>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Responsive;
