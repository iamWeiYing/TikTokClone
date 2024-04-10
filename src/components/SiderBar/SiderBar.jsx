import React, { useState, useEffect } from 'react';
import { Avatar, ConfigProvider, Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, TeamOutlined, AppstoreOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './SiderBar.css'

const { Sider } = Layout;

function SiderBar(props) {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const handleCollapsed = () => {
            if (window.innerWidth >= 1070) setCollapsed(false);
            else setCollapsed(true);
        };

        window.addEventListener('resize', handleCollapsed);

        return () => {
            window.removeEventListener('resize', handleCollapsed);
        };
    }, []);

    const items2 = [
        {
            key: '/',
            label: (
                <a href='/'>
                    Dành cho bạn
                </a>
            ),
            icon: <HomeOutlined />,
        },
        {
            key: '/following',
            label: (
                <a href='/following'>
                    Đang follow
                </a>
            ),
            icon: <UserOutlined />,
        },
        {
            key: '/friends',
            label: (
                <a href='/friends'>
                    Bạn bè
                </a>
            ),
            icon: <TeamOutlined />,
        },
        {
            key: '/explore',
            label: (
                <a href='/explore'>
                    Khám phá
                </a>
            ),
            icon: <AppstoreOutlined />,
        },
        {
            key: '/live',
            label: (
                <a href='/live'>
                    LIVE
                </a>
            ),
            icon: <VideoCameraOutlined />,
        },
        {
            key: 6,
            label: (
                <a onClick={() => console.log(props.user)}>
                    Hồ sơ
                </a>
            ),
            icon: <Avatar src={props.user.photoURL} size={collapsed ? 26 :20} />
        }
    ];

    return (
        <div className='custom-ant-side-bar'>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize: 18,
                    },
                    components: {
                        Menu: {
                            itemHeight: 45,
                            iconSize: 20,
                            collapsedIconSize: 26,
                            itemSelectedBg: '#ffffff',
                            itemSelectedColor: '#ff0033'
                        }
                    }
                }}
            >
                <Sider
                    className='custom-ant-sider'
                    width={230}
                    collapsedWidth={70}
                    collapsed={collapsed}
                    style={{
                        position: 'sticky',
                        height: 'calc(100vh - 60px)',
                        top: 60,
                        bottom: 0,
                        left: 0,
                        overflow: 'auto'
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[window.location.pathname]}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0, fontWeight: 700 }}
                        items={items2}
                    />
                </Sider>
            </ConfigProvider>
        </div>
    );
}

export default SiderBar;