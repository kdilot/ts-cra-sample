import styled from 'styled-components';
import Color from 'assets/Color';

export const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${Color.mint[1]};
    padding-top: 2rem;
`;

export const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 280px;
    border: 1px solid ${Color.mint[5]};
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }
    input {
        padding: 0.5rem;
        flex: 1;
    }
    button {
        width: 100px;
        cursor: pointer;
        padding: 0 1rem;
        border: none;
        background: ${Color.mint[5]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${Color.mint[4]};
        }
    }
`;

export const Tag = styled.div`
    margin-right: 0.5rem;
    color: ${Color.mint[3]};
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

export const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;
