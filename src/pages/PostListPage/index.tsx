import React from 'react';
import loadable from '@loadable/component';

const Header = loadable(() => import('containers/header'));

const PostListPage: React.FC = () => {
    return (
        <>
            <Header />
            <div>adsf</div>
        </>
    );
};

export default PostListPage;
