import React, { useState, useEffect } from 'react';
import { Layout, Tooltip } from 'antd';
import { SendOutlined, MailOutlined } from '@ant-design/icons';

import './TopNavBar.css'
import SearchBox from './SearchBox';
import UploadButton from './UploadButton';
import UserMenu from './UserMenu';
import LoginButton from '../../pages/LoginPg/LoginButton';

function TopNavBar(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { Header } = Layout;

    return (
        <div className='custom-ant-nav-bar'>
            <Header style={{ height: 60 }}>
                <div className='container left-ctner'>
                    <a href="/" className='nav-logo'>
                        <img
                            src={'./src/assets/Tik-Tok-Logo-04-01.png'}
                            alt="Tik-Tok-Logo"
                        />
                        TikT
                        <span className='fa-tiktok'>o</span>
                        k
                    </a>
                </div>
                <div className='container mid-ctner'>
                    {windowWidth >= 770 && <SearchBox />}
                </div>
                <div className='container right-ctner'>
                    {windowWidth >= 600 && <UploadButton />}
                    {props.user.isAnonymous === false &&
                        <>
                            <Tooltip placement='bottom' title='Tin nhắn'>
                                <SendOutlined
                                    style={{
                                        fontSize: 22,
                                        strokeWidth: 10,
                                        stroke: "black"
                                    }}
                                    onClick={() => console.log('Tin nhắn')}
                                />
                            </Tooltip>
                            <Tooltip placement='bottom' title='Hộp thư'>
                                <MailOutlined
                                    style={{
                                        fontSize: 22,
                                        strokeWidth: 10,
                                        stroke: "black"
                                    }}
                                    onClick={() => console.log('Hộp thư')}
                                />
                            </Tooltip>
                            <UserMenu user={props.user} />
                        </>
                    }
                    {props.user.isAnonymous !== false &&
                        <>
                            <LoginButton />
                        </>
                    }
                </div>
            </Header>
        </div>
    );
}

export default TopNavBar;