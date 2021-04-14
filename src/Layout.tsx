import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Toolbar from './components/Toolbar/Toolbar';
import './index.css'
import useKonami from 'react-use-konami';
import Popup from 'reactjs-popup';
import moneyIcon from './dollar.svg';
import Confetti from 'react-confetti'
import styled from 'styled-components';


const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Content = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x:hidden;
  background-color: var(--theme-dark);
  position: relative;
`
const Money = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #252526;
  border-radius: 15px;
  color:#58935e;
  padding:2em 4em;
  margin:1em;
  box-shadow: 0 0 64px black;
  
  & h2 {
    padding-bottom: 1em;
  }
`

const StyledConfetti = styled(Confetti)`
  padding-top:1em;
  width: 100%;
  height: 100%;
`
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
                <Money>
                    <StyledConfetti recycle={false} initialVelocityY={20} numberOfPieces={5000}/>
                    <h2>$10,000</h2>
                    <img src={moneyIcon} alt="money" />
                </Money>
            </Popup>
            <StyledLayout className={(checked? "themelight" : "themedark")}>
                <Toolbar checked={checked} setChecked={setChecked}/>
                <Content id="main">
                    {children}
                </Content>
                <Footer />
            </StyledLayout>
            </BrowserRouter>
          </>
          );
}