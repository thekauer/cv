;
import CountUp from 'react-countup';
import {Slide,Fade} from 'react-awesome-reveal';
import styled from 'styled-components';
import { ExperienceDescription } from '@components/ExperienceDescription'
import { FusionIcons } from 'icons';

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
    & em {
        font-size: 1.5em !important;
    }
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
export default function Fusion() {
    const xpprops = {
        link:"https://github.com/thekauer/fusion",
        icons:FusionIcons
    }
    return (
        <>
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
            <em>Ne tévesszen meg a fusion letisztult szintakszisa, a nyelv erősen típusos, sőt ígyekszik minimalizálni a futás idejű hibák számát.</em>
            </CleanSyntax>
        <CodeImg src={"static/fscode.svg"}/>
        </Fade>
        </Syntax>
        <ExperienceDescription {...xpprops}>
            <p>A Fusion a saját programnyelvem és egyben hobbi projektem amin már évek óta dolgozom, csak sajnos nem sok időm jut rá. A végső cél egy olyan programnyelv megírása aminek egyszerű a szintakszisa mint a pythonnak, gyors és biztonságos mint a rust, és könnyen lehet vele folytatni bármilyen másik nyelvben írt projektet.</p>
            <p>C++ban írom és llvm-et használok a kódgeneráláshoz. A jővőben pedig lld fogja linkelni az objekt fájlokat. Teszteléshez a Google Test keretrendszert használom. Az eggyik első számú priorításom most, a coverage reportok készítése és még több teszt eset írása.</p>
        </ExperienceDescription>
        </StyledFusion>
        </>
    );
}