import styled from 'styled-components';
import loadable from '@loadable/component';
const Responsive = loadable(() => import('components/common/Responsive'));

export const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
`;

export const Right = styled.div``;

export const Spacer = styled.div`
    height: 4rem;
`;
