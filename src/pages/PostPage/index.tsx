import React from 'react';
import loadable from '@loadable/component';

const Header = loadable(() => import('containers/header'));
const PostViewer = loadable(() => import('components/post/postViewer'));

const PostPage: React.FC = () => {
    return (
        <>
            <Header />
            <PostViewer />
        </>
    );
};

export default PostPage;
