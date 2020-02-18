import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from './styles';

const Button: React.FC<any> = ({ to, history, ...props }) => {
    const onClick = (e: Event) => {
        if (to) {
            history.push(to);
        }
        if (props.onClick) {
            props.onClick(e);
        }
    };
    return <Container {...props} onClick={onClick} />;
};

export default withRouter(Button);
