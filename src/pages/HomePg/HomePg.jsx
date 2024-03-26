import React from 'react';

import PostHP from '../../components/Post_HomePg/PostHP';

function HomePg() {
    const videos = [
        {
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            videoName: "Big Buck Bunny",
        },
        {
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            videoName: "Elephant's Dream",
        },
        {
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            videoName: "For Bigger Blazes",
        },
        {
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
            videoName: "Tree with Yellow Flowers",
        },
        
        
        
    ];
    return (
        <div>
            {videos?.map((video) =>
                <div key={videos.indexOf(video)} style={{ width: 505, margin: '100px auto 400px' }}>
                    <PostHP data={video} />
                </div>
            )}
        </div>
    );
}

export default HomePg;