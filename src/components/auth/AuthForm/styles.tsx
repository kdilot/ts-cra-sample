import styled from 'styled-components';
import Color from 'assets/Color';
import loadable from '@loadable/component';
const Button = loadable(() => import('components/common/Button'));

export const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${Color.mint[5]};
        margin-bottom: 1rem;
    }
`;

export const InputBox = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${Color.mint[3]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;

    ::placeholder {
        color: ${Color.mint[2]};
    }

    &:focus {
        color: ${Color.mint[5]};
        border-bottom: 1px solid ${Color.mint[4]};
    }

    & + & {
        margin-top: 1rem;
    }
`;

export const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${Color.mint[3]};
        &:hover {
            color: ${Color.mint[5]};
        }
    }
`;

export const ButtonForm = styled(Button)`
    margin-top: 1rem;
`;
