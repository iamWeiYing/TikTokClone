import React from 'react'
import { ConfigProvider, Layout } from 'antd';

import { AppTheme } from './AppTheme';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SiderBar from './components/SiderBar/SiderBar';
import RouteMng from './routes/RouteMng';

function App() {

    return (
        <ConfigProvider theme={AppTheme}>
            <Layout>
                <TopNavBar />
                <Layout style={{ marginTop: 64 }}>
                    <SiderBar />
                    <div>
                        <RouteMng />
                    </div>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default App
