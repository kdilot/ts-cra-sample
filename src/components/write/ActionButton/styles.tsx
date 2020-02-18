import styled from 'styled-components';
import loadable from '@loadable/component';
const Button = loadable(() => import('components/common/Button'));

export const Wrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;

    button + button {
        margin-left: 0.5rem;
    }
`;

export const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;
