import styled, { css } from 'styled-components';
import Color from 'assets/Color';

export const Container = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${Color.mint[5]};

    &:hover {
        background: ${Color.mint[3]};
    }

    ${(props: any) =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}
    ${(props: any) =>
        props.black &&
        css`
            background: rgba(0, 0, 0, 0.7);
            &:hover {
                background: rgba(0, 0, 0, 0.5);
            }
        `}
`;
