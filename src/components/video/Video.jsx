import React, { useEffect, useState, useRef } from 'react';
import { Slider, Tooltip } from 'antd';
import { CaretRightOutlined, PauseOutlined, SoundFilled, MutedFilled } from '@ant-design/icons';
import './Video.css';

const secConvert = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return `${min}:${secRemain}`;
};

function Video(props) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);

    const [currentTime, setCurrentTime] = useState([0, 0]);
    const [duration, setDuration] = useState([0, 0]);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;

        const checkViewport = () => {
            // Kiểm tra nếu video nằm trong viewport
            const rect = video.getBoundingClientRect();
            const inViewport = (
                rect.top >= -50 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 50 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (inViewport) {
                setIsPlaying(true);
                videoRef.current.play();
            } else {
                setIsPlaying(false);
                videoRef.current.pause();
            }
        };

        const handleScroll = () => {
            checkViewport();
        };

        // Đăng ký event listener khi mount component
        window.addEventListener('scroll', handleScroll);

        // Kiểm tra trạng thái khi component được mount
        checkViewport();

        // Hủy đăng ký event listener khi unmount component
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime || 0);
        };

        const handleLoadedMetadata = () => {
            setCurrentTime(0);
            setDuration(video.duration);
        };

        if (videoRef.current) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    const toggleIsPlaying = () => {
        setIsPlaying(!isPlaying);
    };

    const togglePlayPause = () => {
        toggleIsPlaying();
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(videoRef.current.muted);
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
                onEnded={toggleIsPlaying}
                muted={muted}
            >
                <source
                    src={props.videoUrl}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            {showControls && (
                <div className="controls">
                    <div className="control-row top">
                        <button className="play-pause-button" onClick={togglePlayPause}>
                            {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
                        </button>

                        <Tooltip
                            title={
                                <Slider
                                    vertical
                                    style={{ height: 70, margin: '12px 0 12px 2px' }}
                                    tooltip={{ formatter: null }}
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    value={videoRef.current.volume}
                                    onChange={(e) => {
                                        videoRef.current.volume = e
                                    }}
                                    disabled={muted}
                                />
                            }
                            placement="top"
                            arrow={false}
                        >
                            <button className="play-pause-button" onClick={toggleMute}>
                                {muted ? <MutedFilled /> : <SoundFilled />}
                            </button>
                        </Tooltip>
                    </div>
                    <div className="control-row bottom">
                        <Slider
                            style={{ width: '100%', flex: 1 }}
                            tooltip={{ formatter: null }}
                            min={0}
                            max={Number(duration).toFixed(0)}
                            defaultValue={0}
                            value={Number(currentTime).toFixed(0)}
                            onChange={(e) => {
                                videoRef.current.currentTime = e;
                            }}
                        />

                        <div className="duration" style={{ flex: '0 0 auto', marginLeft: 15 }}>
                            {secConvert(currentTime)} | {secConvert(duration)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Video;