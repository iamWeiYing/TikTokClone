import React from 'react'
import { ConfigProvider } from 'antd';

import HomePg from './pages/HomePg/HomePg';
import { AppTheme } from './AppTheme';

function App() {

    return (
        <ConfigProvider theme={AppTheme}>
            <HomePg/>
        </ConfigProvider>
    )
}

export default App
