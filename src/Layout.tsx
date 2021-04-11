import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Toolbar from './components/Toolbar/Toolbar';
import './index.css'
import './Layout.css'
import useKonami from 'react-use-konami';
import Popup from 'reactjs-popup';
import moneyIcon from './dollar.svg';
import Confetti from 'react-confetti'

export default function Layout({children}:any) {
    const [checked,setChecked] = useState(false);
    const [money,setMoney] = useState(false);
    useKonami(() => {
        setMoney(true);
    }, {
        code: ['r','o','c','k','e','f','e','l','l','e','r'], 
    });
    return (
            <>
            <BrowserRouter>
            <ScrollTop />
            <Popup open={money} onClose={() => setMoney(false)}>
                <div className="money">
                    <Confetti className="confetti" recycle={false} initialVelocityY={20} numberOfPieces={5000}/>
                    <h2>$10,000</h2>
                    <img src={moneyIcon} alt="money" />
                </div>
            </Popup>
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