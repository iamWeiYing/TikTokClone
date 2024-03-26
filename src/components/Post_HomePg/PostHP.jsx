import React from 'react';

import Video from '../video/Video';
import { HeartFilled, CommentFilled, BookmarkOutlined, BookmarkFilled } from '../icon/customIcon';

function PostHP(props) {
    return (
        <>
            <h1>{props.data.videoName} <HeartFilled /> <CommentFilled /> <BookmarkOutlined /> <BookmarkFilled /></h1>
            <Video videoUrl={props.data.videoUrl} />
        </>
    );
}

export default PostHP;