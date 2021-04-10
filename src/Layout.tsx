import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Toolbar from './components/Toolbar/Toolbar';
import './Layout.css'
import useKonami from 'react-use-konami';

export default function Layout({children}:any) {
    const [checked,setChecked] = useState(false);
    useKonami(() => {
        console.log('hi easter egg!');
    }, {
        code: ['r','o','c','k','e','f','e','l','l','e','r'], 
    });
    return (
            <>
            <BrowserRouter>
            <ScrollTop />
            <div className={(checked? "themelight" : "themedark") + " layout"}>
                <Toolbar checked={checked} setChecked={setChecked}/>
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
            </BrowserRouter>
          </>
          );
}