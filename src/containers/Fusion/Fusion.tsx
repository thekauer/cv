import '../../index.css';
import CountUp from 'react-countup';
import fsCode from './images/fscode.svg';
import {Slide,Fade} from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';


const StyledFusion = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    & * {
        color:var(--active-font-color);
    }
`
const FusionData = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10em 2em;
`
const Header = styled.header`
    display:flex;
    flex-direction: column;
    background-color: var(--blue);
    padding:15em 2em;
`
const Em = styled.em`
    font-size: 1.5em;
`

const Syntax = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: var(--blue);
    padding:5em 2em;
`
const CodeImg = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 0 64px rgba(0,0,0,0.5);
`

const CleanSyntax = styled.div`
    max-width: 600px;
    margin-bottom: 2em;
    & h2 {
        margin-bottom: 0.5em;
    }
`

const Data = styled.div`
    margin-bottom: 2em;
    padding: 0 2em;
    display:flex;
    flex-direction: column;
    & img {
        max-height: 3em;
    }
    & span {
        font-size: 5em;
    }
`
export const Fusion = () => {
    return (
        <>
        <Helmet>
            <title>Fusion - Kauer András</title>
        </Helmet>
        <StyledFusion>
        <Header>
        <h1>Fusion</h1>
        <em>Fordított, llvm-alapú programozási nyelv</em>
        </Header>
        <FusionData>
            <Slide direction="up" triggerOnce fraction={0.5}>
            <Data>
            <h2>Sorok</h2>
            <CountUp end={3631} delay={0.5} ></CountUp>
            </Data>
            <Data>
            <h2>Commitok</h2>
            <CountUp end={402} delay={0.5}></CountUp>
            </Data>
            <Data>
            <h2>Tesztek</h2>
            <CountUp end={456} delay={0.5}></CountUp>
            </Data>
            </Slide>
        </FusionData>
        <Syntax>
        <Fade triggerOnce fraction={0.5}>
            <CleanSyntax>
            <h2>Tiszta szintakszis</h2>
            <Em>Ne tévesszen meg a fusion letisztult szintakszisa, a nyelv erősen típusos, sőt ígyekszik minimalizálni a futás idejű hibák számát.</Em>
            </CleanSyntax>
        <CodeImg src={fsCode}/>
        </Fade>
        </Syntax>
        </StyledFusion>
        </>
    );
}