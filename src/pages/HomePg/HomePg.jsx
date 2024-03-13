import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import TopNavBar from '../../components/TopNavBar/TopNavBar';


function HomePg() {
    return (
        <Layout>
            <TopNavBar />
            <div style={{ marginTop: 64 }}>
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 1380 }}
                >
                    Content
                </div>
            </div>
        </Layout>
    );
}

export default HomePg;