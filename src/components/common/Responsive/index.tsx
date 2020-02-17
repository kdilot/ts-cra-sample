import React from 'react';
import { ResponsiveBlock } from './styles';

const Responsive: React.FC = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
