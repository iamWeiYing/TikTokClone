import React, { useState, useEffect } from 'react';

import PostHP from '../../components/Post_HomePg/PostHP';

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/config';

function HomePg() {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'Posts'), (querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(newData);
            setPosts(newData);
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'Users'), (querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(newData);
            setUsers(newData);
        });
        return () => unsub();
    }, []);

    /*const videos = [
        {
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            videoName: "Big Buck Bunny",
            authorTitle: 'weiying2001',
            authorName: 'Wei Ying',
            videoText: 'Spectaculaire merveilles océaniques #ocean #merveilles #merveillesaquatiques #poisson #pourtoi #tiktok',
        },
        {
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            videoName: "Elephant's Dream",
            authorTitle: 'weiying2001',
            authorName: 'Wei Ying',
            videoText: 'Spectaculaire merveilles océaniques #ocean #merveilles #merveillesaquatiques #poisson #pourtoi #tiktok',
        },
        {
            videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            videoName: "For Bigger Blazes",
            authorTitle: 'weiying2001',
            authorName: 'Wei Ying',
            videoText: 'Spectaculaire merveilles océaniques #ocean #merveilles #merveillesaquatiques #poisson #pourtoi #tiktok',
        },
        {
            videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
            videoName: "Tree with Yellow Flowers",
            authorTitle: 'weiying2001',
            authorName: 'Wei Ying',
            videoText: 'Spectaculaire merveilles océaniques #ocean #merveilles #merveillesaquatiques #poisson #pourtoi #tiktok',
        }, 
    ];*/

    return (
        <div>
            {posts?.map((video) =>
                <div key={video.id} style={{ margin: '20px auto 20px' }}>
                    <PostHP data={video} user={users.find((x) => x.id === video.authorTitle)} />
                </div>
            )}
        </div>
    );
}

export default HomePg;