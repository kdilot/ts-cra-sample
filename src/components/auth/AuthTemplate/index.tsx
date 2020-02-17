import React from 'react';
import { AuthTemplateBlock, LogoArea, WhiteBox } from './styles';
import { Link } from 'react-router-dom';

const AuthTemplate: React.FC = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <LogoArea>
                    <Link to="/">TRIZ</Link>
                </LogoArea>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;
