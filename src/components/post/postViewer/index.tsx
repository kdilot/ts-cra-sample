import React from 'react';
import {
    SubInfo,
    PostContent,
    PostHead,
    PostViewerBlock,
    Tags,
} from './styles';
import { withRouter } from 'react-router-dom';

const PostViewer: React.FC<any> = ({ history }) => {
    const postNo = history.location.pathname.split('/')[2];
    const postList = JSON.parse(localStorage.getItem('postList') || '[]')[
        postNo
    ];
    console.log(postList);
    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{postList.title}</h1>
                <SubInfo>
                    <span>
                        <b>{postList.user}</b>
                    </span>
                </SubInfo>
                <Tags>
                    {postList.tags.map((m: string) => (
                        <div className="tag" key={m}>
                            #{m}
                        </div>
                    ))}
                </Tags>
            </PostHead>
            <PostContent
                dangerouslySetInnerHTML={{
                    __html: `${postList.body}`,
                }}
            />
        </PostViewerBlock>
    );
};

export default withRouter(PostViewer);
