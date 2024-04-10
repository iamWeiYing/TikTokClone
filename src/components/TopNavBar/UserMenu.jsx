import React from 'react';
import { Avatar, ConfigProvider, Dropdown } from 'antd';
import { UserOutlined, TikTokOutlined, VideoCameraOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { BookmarkOutlined, LoginOutlined } from '../icon/customIcon';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';


const handleLogout = () => {
    signOut(auth).then(() => {
        localStorage.setItem('isLogedIn', false);
        window.location.reload();
    }).catch((err) => {
        console.log(err, 'err')
    })
}

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
                Xem hồ sơ
            </a>
        ),
        icon: <UserOutlined />,
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
                Yêu thích
            </a>
        ),
        icon: <BookmarkOutlined />,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
                Nhận xu
            </a>
        ),
        icon: <TikTokOutlined />,
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
                LIVE Studio
            </a>
        ),
        icon: <VideoCameraOutlined />,
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/">
                Trung tâm nhà sáng tạo LIVE
            </a>
        ),
        icon: <VideoCameraAddOutlined />,
    },
    {
        key: '6',
        label: (
            <a onClick={() => {
                /*localStorage.setItem('isLogedIn', false);
                window.location.reload();*/
                handleLogout();
            }}>
                Đăng xuất
            </a>
        ),
        icon: <LoginOutlined />,
    },
];

function UserMenu(props) {

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 18,
                    fontSizeIcon: 18,
                    lineHeight: 2.1,
                },
            }}
        >
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow
            >
                <Avatar
                    src={props.user.photoURL}
                    size={35}
                />
            </Dropdown>
        </ConfigProvider>
    );
}

export default UserMenu;