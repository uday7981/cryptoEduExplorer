import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => (
    <div style={{ padding: '16px' }}>
        <Outlet />
    </div>
);

export default MainContent;
