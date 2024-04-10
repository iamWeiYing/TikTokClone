import React, { useState } from 'react';
import { Avatar, Button, Flex } from 'antd';
import './PostHP.css';

import Video from './video/Video';
import FollowBtn from './FollowBtn';
import { HeartFilled, CommentFilled, BookmarkFilled, ShareFilled } from '../icon/customIcon';

function PostHP(props) {

    const [liked, setLiked] = useState(false);
    const [favorite, setFavorite] = useState(false);

    return (
        <div className='postContainer'>
            <a><Avatar
                src={'./src/assets/Avatar.jpg'}
                size={56}
                shape='circle'
                style={{ marginRight: 10 }}
            /></a>
            <div className='contentContainer'>
                <Flex style={{ marginBottom: 15 }}>
                    <div>
                        <p><a>{props.data.authorTitle}</a> {props.user.username}</p>
                        <p>{props.data.videoText}</p>
                    </div>
                    <FollowBtn />
                </Flex>
                <Flex className='postVideoPlayer'>
                    <Video videoUrl={props.data.videoUrl} />
                    <Flex className='mediaButtons' vertical justify='flex-end' align='center' gap={10}>
                        <Button
                            type="default"
                            shape="circle"
                            icon={<HeartFilled style={{ color: liked?'red':'black' }} />}
                            onClick={() => setLiked(!liked)}
                        />
                        <p>Lik</p>
                        <Button type="default" shape="circle" size='large' icon={<CommentFilled />} />
                        <p>Cmt</p>
                        <Button
                            type="default"
                            shape="circle"
                            size='large'
                            icon={<BookmarkFilled style={{ color: favorite ? '#ffaa00' : 'black' }} />}
                            onClick={() => setFavorite(!favorite)}
                        />
                        <p>Fav</p>
                        <Button type="default" shape="circle" size='large' icon={<ShareFilled />} />
                        <p>Shr</p>
                    </Flex>
                </Flex>
            </div>
        </div>
    );
}

export default PostHP;