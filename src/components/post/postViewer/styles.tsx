import styled from 'styled-components';
import Color from 'assets/Color';
import loadable from '@loadable/component';

const Responsive = loadable(() => import('components/common/Responsive'));

export const PostViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;

export const PostHead = styled.div`
    border-bottom: 1px solid ${Color.mint[0]};
    padding-bottom: 3rem;
    margin: 3rem 0;

    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
`;

export const SubInfo = styled.div`
    margin-top: 1rem;
    color: ${Color.mint[5]};

    span + span:before {
        color: ${Color.mint[3]};
        padding: 0 0.25rem;
        content: '\\B7';
    }
`;

export const Tags = styled.div`
    margin-top: 0.5rem;
    .tag {
        display: inline-block;
        color: ${Color.mint[5]};
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover {
            color: ${Color.mint[4]};
        }
    }
`;
export const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${Color.mint[5]};
    line-height: 0.5;
`;
