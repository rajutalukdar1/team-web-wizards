import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[95%] mx-auto mt-5 bottom'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;