import React from 'react'
import { ConfigProvider, Layout } from 'antd';

import { AppTheme } from './AppTheme';
import TopNavBar from './components/TopNavBar/TopNavBar';
import SiderBar from './components/SiderBar/SiderBar';
import RouteMng from './routes/RouteMng';

/*import { getDatabase, ref, child, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { database, db } from './firebase/config'*/

function App() {

    /*const readDB = async () => {
        await getDocs(collection(db, "Posts"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log(newData);
            })
    }
    readDB();*/

    /*const dbRef = ref(database);
    get(child(dbRef, `Posts`)).then((response) => {
        if (response.exists()) {
            console.log(response.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });*/

    return (
        <ConfigProvider theme={AppTheme}>
            <Layout>
                <TopNavBar />
                <Layout style={{ marginTop: 64 }}>
                    <SiderBar />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <RouteMng />
                    </div>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default App
