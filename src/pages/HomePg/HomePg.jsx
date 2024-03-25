import React from 'react';

import Video from '../../components/video/Video';

function HomePg() {
    const videos = [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    ];
    return (
        <ul>
            {videos?.map((video) =>
                <li key={videos.indexOf(video)} style={{ margin: '400px auto' }}>
                    <div style={{ width: 505 }}>
                        <p>Day la video</p>
                        <Video videoUrl={video} />
                    </div>
                </li>
            )}
        </ul>
    );
}

export default HomePg;