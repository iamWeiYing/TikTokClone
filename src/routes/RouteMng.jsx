import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePg from '../pages/HomePg/HomePg';
import FollowPg from '../pages/FollowPg/FollowPg';

function RouteMng() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"             element={<HomePg />     } />
                <Route path="/following"    element={<FollowPg />   } />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteMng;