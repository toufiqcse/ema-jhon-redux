import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/Nav/Header/Header';

const Rooot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Rooot;