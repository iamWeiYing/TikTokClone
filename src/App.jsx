import React, { useState } from 'react'
import { ConfigProvider, Layout } from 'antd';

import { AppTheme } from './AppTheme';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SiderBar from './components/SiderBar/SiderBar';
import RouteMng from './routes/RouteMng';
import LoginModal from './pages/LoginPg/LoginModal';

import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
    const [currentUser, setCurrentUser] = useState({});
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        }
    });

    return (
        <ConfigProvider theme={AppTheme}>
            <Layout>
                <TopNavBar user={currentUser} />
                <Layout style={{ marginTop: 64 }}>
                    <SiderBar user={currentUser} />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <RouteMng />
                    </div>
                </Layout>
                <LoginModal/>
            </Layout>
        </ConfigProvider>
    )
}

export default App;
