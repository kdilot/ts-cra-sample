import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: lightgray;

    &:hover {
        background: gray;
    }
`;
