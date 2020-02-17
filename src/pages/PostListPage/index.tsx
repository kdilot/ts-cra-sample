import React from 'react';
import loadable from '@loadable/component';

const Header = loadable(() => import('components/common/Header'));

const PostListPage: React.FC = () => {
    return (
        <>
            <Header />
            <div>안녕하세요</div>
        </>
    );
};

export default PostListPage;
