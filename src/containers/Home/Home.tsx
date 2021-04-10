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
                        A laptopomon 3 évig linux volt, mert csak az ment el rajta. Annyira rossz volt a helyzet, hogy amikor megpróbáltam gnome-os Manjaro-t rakni rá, attól, hogy betöltött az UI <strong>lefagyott</strong> a laptop. Szóval úgy használtam, hogy direkt nem indítottam el az x-server-t, és gyakorlatilag <strong>command line</strong>-ban vezéreltem a rendszert. Ezáltal értékes <strong>linuxos</strong> tapasztalatra tettem szert.
                </Skill>
                    <Skill title={"Soft skillek"}>
                        Már több mint 7 éve tartok karate edzéseket, nagyrészt fiataloknak. Ehhez minden létező soft skillre szükségem volt. Többek között <strong>csapatmunkára</strong>, sokszor ketté osztjuk a csapatot és én kapom a hajtépős felét. Illetve kiváló <strong>kommunikációs képessé</strong>gre és <strong>konfliktus kezelésre</strong>. Mert amikor meglátom, hogy a nagyobbik gyerek akkora pofont ad a kissebbiknek, hogy a padló adja a párját, olyankor mondom neki, hogy akkor edzés végéig velem lesz párban.
                </Skill>
                </div>
            </section>
        </article>
    );
}

export default Home;