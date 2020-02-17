import React from 'react';
import { HeaderBlock, Logo, Right, Spacer, Wrapper } from './styles';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';

const Button = loadable(() => import('components/common/Button'));

const Responsive: React.FC = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Logo>
                        <Link to="/">TRIZ</Link>
                    </Logo>
                    <Right>
                        <Button>로그인</Button>
                    </Right>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Responsive;
