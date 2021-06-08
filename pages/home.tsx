
import { Skill } from '../components/Skill'
import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { appDesc, appName, cvDesc, cvName, fsDesc, fsName, phdDesc, phdName, tdkDesc, tdkName } from '../content';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const StyledHome = styled.article`
    padding: 1.5em 0;
    & svg path#bottom {
        fill:var(--theme-mid);
    }
`

const SkillContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
const Skills = styled.section`
    margin:5em 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    & h2 {
        margin-bottom: 3em;
    }
`
const Portfolio = styled.section`
    background-color: var(--theme-mid);
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    & svg path#bottom {
        fill:var(--theme-dark);
    }
`
const Header = styled.header`
    padding:10em 2em;
    display: grid;
    place-items: center;
    & h1 {
        font-size: 5em;
        color:var(--font-color);
    }
`
const Svg = styled.svg<any>`
    height: 10em;
    width: 100%;
    transform:rotate(${props => props.top && "180"}deg);
`
const Home = () => {
    return (
        <StyledHome>
            <Header>
                <Fade triggerOnce><h1>Kauer András</h1></Fade>
            </Header>
            <Portfolio>
            <Svg viewBox='0 0 100 100' preserveAspectRatio='none' top>
                <path d='m 0,100 h 100 l 0,-90z' id='bottom' />
            </Svg>
                    <PortfolioCard title={fsName} desc={fsDesc} color="var(--blue)" icon="" path="/fusion" />
                    <PortfolioCard title={phdName} desc={phdDesc} color="var(--yellow)" icon="" path="/phd" />
                    <PortfolioCard title={cvName} desc={cvDesc} color="var(--react)" icon="" path="/website" />
                    <PortfolioCard title={appName} desc={appDesc} color="var(--green)" icon="" path="/androidapp" />
                <Svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                    <path d='m 0,100 h 100 l 0,-90z' id='bottom' />
                </Svg>
            </Portfolio>

            <Skills>
                <header><h2>Skillek</h2></header>
                <SkillContainer>
                    <Skill title={"Linux"}>
                        Évekig linux volt az elsőszámú operációs rendszer amit használtam napi szinten. Csak nemrég váltottam Windows 10-re WSL-el. Számos disztibuciót használtam már, főként Arch és Debian alapúakat.
                    </Skill>
                    <Skill title={'Agilis módszertan'}>
                        Bár még nem volt alkalmam kipróbálni magam cégnél. Minden projektem hasonló mukafolyamaton alapúl. A programozási nyelvem és a weblapom is úgy készült, hogy egy kanban támblán vezettem az adott feladatokat, amiket igyekeztem prioratizálni fontosság és idő szerint. A telenfonos alkalmazásnál és a Phd-nél pedig jelenetős szerepem volt a tervezésben és teljesen önálóan csináltam a kivitelezést.
                    </Skill>
                    <Skill title={'Git'}>
                        Minden projektemhez git-et használtam. Az utóbbi időben váltottam csak a VS Code-ba beépített GUI verzióra.
                    </Skill>
                    <Skill title={'Kommunikáció'}>
                        7 éven keresztül voltam karate edző. Tanítottam minden korcsoportott. Illetve elég gyakran jártunk külföldre versenyre, ilyenkor a szervezést a szállást és a regisztrációkat is gyakran én intéztem el.
                    </Skill>
                </SkillContainer>
            </Skills>
        </StyledHome>
    );
}

export default Home;