import React from 'react';
import loadable from '@loadable/component';

const Button = loadable(() => import('components/common/Button'));

const PostListPage: React.FC = () => {
    return (
        <>
            <div>포스트 리스트</div>
            <Button>버튼</Button>
        </>
    );
};

export default PostListPage;
