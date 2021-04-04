import '../../index.css';
import './Fusion.css'
import CountUp from 'react-countup';
import fsCode from './images/fscode.svg';
import {Slide,Fade} from 'react-awesome-reveal';

export const Fusion = () => {
    return (
        <>
        <article className="fusion">
        <header>
        <h1>Fusion</h1>
        <em>Fordított, llvm-alapú programozási nyelv</em>
        
        </header>
        <section id="fusion-data">
            <Slide direction="up" triggerOnce fraction={0.5}>
            <div className="fusion-data-container">
            <h2>Sorok</h2>
            <CountUp end={3631} delay={0.5} ></CountUp>
            </div>
            <div className="fusion-data-container">
            <h2>Commitok</h2>
            <CountUp end={402} delay={0.5}></CountUp>
            </div>
            <div className="fusion-data-container">
            <h2>Tesztek</h2>
            <CountUp end={456} delay={0.5}></CountUp>
            </div>
            </Slide>
        </section>
        <section className="syntax">
        <Fade triggerOnce fraction={0.5}>
            <div className="clean-syntax">
            <h2>Tiszta szintakszis</h2>
            <em>Ne tévesszen meg a fusion letisztult szintakszisa, a nyelv erősen típusos, sőt ígyekszik minimalizálni a futás idejű hibák számát.</em>
            </div>
        <img src={fsCode} className="code"/>
        </Fade>
        </section>
        </article>
        </>
    );
}