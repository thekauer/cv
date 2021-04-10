import '../../index.css'
import './Home.css'
import { Skill } from '../../components/Skill/Skill'
import React from 'react';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import { appDesc, appName, cvDesc, cvName, fsDesc, fsName, phdDesc, phdName, tdkDesc, tdkName } from '../../content';
const Home = () => {
    return (
        <article className="home">
            <header className="head">
                <h1>Kauer András</h1>

            </header>
            <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                <path d='m 0,100 h 100 l 0,-90z' id='bottom' />
            </svg>
            <section id="portfolio">
                <div className="portfolio-container">
                    <PortfolioCard title={fsName} desc={fsDesc} color="var(--blue)" icon="" path="/fusion" />
                    <PortfolioCard title={phdName} desc={phdDesc} color="var(--yellow)" icon="" path="/phd" />
                    <PortfolioCard title={cvName} desc={cvDesc} color="var(--react)" icon="" path="" />
                    <PortfolioCard title={appName} desc={appDesc} color="rgb(76 203 45)" icon="" path="" />
                    <PortfolioCard title={tdkName} desc={tdkDesc} color="rgb(211 2 2)" icon="" path="" />
                </div>
                <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                    <path d='m 0,100 h 100 l 0,-90z' id='bottom' />
                </svg>
            </section>

            <section className="skills">
                <header><h2>Skillek</h2></header>
                <div className="skill-container">
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
                </div>
            </section>
        </article>
    );
}

export default Home;