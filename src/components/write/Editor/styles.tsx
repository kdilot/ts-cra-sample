import styled from 'styled-components';

export const EditorBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem 0;
    min-height: 350px;
`;

export const TitleInput = styled.input`
    font-size: 2.5rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 2rem;
    width: 100%;
`;

export const QuillWrapper = styled.div`
    .ql-editor {
        padding: 0;
        min-height: 320px;
        max-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-ediotr.ql-blank::before {
        left: 0px;
    }
`;
