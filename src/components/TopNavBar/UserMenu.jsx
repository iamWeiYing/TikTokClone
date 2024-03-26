import React from 'react';
import { Avatar, ConfigProvider, Dropdown } from 'antd';
import { UserOutlined, TikTokOutlined, VideoCameraOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { BookmarkOutlined } from '../icon/customIcon';

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
];

function UserMenu() {
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
                    src={'./src/assets/Avatar.jpg'}
                    size={35}
                />
            </Dropdown>
        </ConfigProvider>
    );
}

export default UserMenu;