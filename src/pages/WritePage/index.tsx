import React, { useEffect } from 'react';
import loadable from '@loadable/component';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, writePost } from 'reducers/write';

const Responsive = loadable(() => import('components/common/Responsive'));
const Editor = loadable(() => import('components/write/Editor'));
const TagBox = loadable(() => import('components/write/TagBox'));
const ActionButton = loadable(() => import('components/write/ActionButton'));

const WritePage: React.FC<any> = ({ history }) => {
    const hash = JSON.parse(localStorage.getItem('hash') || '{}');
    const { title, body, tags, post } = useSelector(({ write }: any) => ({
        tags: write.tags,
        title: write.title,
        body: write.body,
        post: write.post,
    }));
    const dispatch = useDispatch();

    const onCancel = () => {
        dispatch(initialize(null));
        history.push('/');
    };

    const onPublish = () => {
        if (!title || !body || !Object.keys(hash).length) {
            alert('제목 및 내용은 필수입니다.');
            return;
        }
        dispatch(writePost({ title, body, tags, user: hash.username }));
    };

    useEffect(() => {
        dispatch(initialize(null));
    }, [dispatch]);

    useEffect(() => {
        if (post) {
            history.push('/');
        }
    }, [post, history]);

    return (
        <Responsive>
            <Editor />
            <TagBox />
            <ActionButton onPublish={onPublish} onCancel={onCancel} />
        </Responsive>
    );
};

export default withRouter(WritePage);
