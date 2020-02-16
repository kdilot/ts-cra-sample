import React from 'react';
import { Container } from './Styles';

interface Props {
    props: HTMLElement;
}

const Button: React.FC<any> = props => {
    return <Container {...props} />;
};

export default Button;
