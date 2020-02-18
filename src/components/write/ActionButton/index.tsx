import React from 'react';
import { Wrapper, StyledButton } from './styles';

interface Props {
    onCancel: () => void;
    onPublish: () => void;
}

const ActionButton: React.FC<Props> = ({ onCancel, onPublish }) => {
    return (
        <Wrapper>
            <StyledButton onClick={onPublish}>포스트등록</StyledButton>
            <StyledButton onClick={onCancel} black>
                취소
            </StyledButton>
        </Wrapper>
    );
};

export default ActionButton;
