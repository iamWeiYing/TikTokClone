import React, { useEffect, useState, useRef } from 'react';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import './Video.css';

const secConvert = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return `${min}:${secRemain}`;
};

function Video(props) {

    const [isPlaying, setIsPlaying] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);

    const [currentTime, setCurrentTime] = useState([0, 0]);
    const [duration, setDuration] = useState([0, 0]);

    /*useEffect(() => {
        const { min, sec } = sec2Min(videoRef.current.duration);
        setDurationSec(videoRef.current.duration);
        setDuration([min, sec]);

        console.log(videoRef.current.duration);
        const interval = setInterval(() => {
            const { min, sec } = sec2Min(videoRef.current.currentTime);
            setCurrentTimeSec(videoRef.current.currentTime);
            setCurrentTime([min, sec]);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying]);*/

    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime || 0);
        };

        const handleLoadedMetadata = () => {
            setCurrentTime(video.currentTime || 0);
            setDuration(video.duration);
        };

        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const handleShowControls = () => {
        setShowControls(true);
    };

    const handleHideControls = () => {
        setShowControls(false);
    };

    return (
        <div className="video-player" onMouseOver={handleShowControls} onMouseOut={handleHideControls}>
            <video
                ref={videoRef}
                className="video"
                onClick={togglePlayPause}
                loop
                autoPlay
                muted
            >
                <source
                    src={props.videoUrl}
                    type="video/mp4" 
                />
                Your browser does not support the video tag.
            </video>
            {showControls && (
                <div className="controls">
                    <button className="play-pause-button" onClick={togglePlayPause}>
                        {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
                    </button>
                    <input
                        type="range"
                        className="volume-slider"
                        min="0"
                        max={duration}
                        default="0"
                        step='1'
                        value={currentTime}
                        onChange={(e) => {
                            videoRef.current.currentTime = e.target.value;
                        }}
                    />
                    <div className="duration">
                        {secConvert(currentTime)} | {secConvert(duration)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Video;