import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Toolbar from './components/Toolbar/Toolbar';
import './Layout.css'

export default function Layout({children}:any) {
    return (
            <>
            <BrowserRouter>
            <ScrollTop />
            <div className="layout">
                <Toolbar />
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
            </BrowserRouter>
          </>
          );
}