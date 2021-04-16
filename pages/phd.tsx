import CountUp from 'react-countup';
import Image from 'next/image'
import { Arrow } from '../components/Arrow';
import { Gear } from '../components/Gear';
import VisibilitySensor from 'react-visibility-sensor';
import { YoloRecog as YC} from '../components/YoloRecog';
import dynamic from 'next/dynamic';
const YoloRecog = dynamic(()=>(import('@components/YoloRecog')as any).then((mod:any)=>mod.YoloRecog),{ssr:false});
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Head from 'next/head';

//#region  "Style"
const StyledPhd = styled.article`
    & * {
        color:var(--active-font-color);
    }
    & .gear {
        position: relative;
        width: 75%;
        transform-origin:  center center;
        animation-name: gearSpin;
        animation-duration: 3s;
        animation-direction: normal;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    & .gear  #outline,#circle,#line {
        fill:none;
        stroke-width: 5px;
        stroke-miterlimit: 10px;
        stroke-linecap: round;
        stroke:black;
    }
    & .gray-gear #inside {
        fill:#C6C6C6;
    }
    & .gray-gear #outside {
        fill:#969696;
    }

    & .yellow-gear #inside {
        fill:#8b6b00;
    }
    & .yellow-gear #outside {

        fill:#ffd546;
    }
    & .blue-gear #inside {
        fill:#3774a7;

    }
    & .blue-gear #outside {
        fill:#003c6d;
    }


    & .blue-gear {
        animation-duration: 3s;
        animation-direction: reverse;
        left:-1em;
        top:-1em;
    }
    & .yellow-gear {
        animation-duration: 3s;
        width: 50%;
        left:10.5em;
        top:-7em;
    }
    & .gray-gear {
        animation-duration: 3s;
        animation-delay: -100ms;
        width: 25%;
        animation-direction: reverse;
        left:7.6em;
        top:-10em;
    }
    @media (max-width:400px) {
        & .blue-gear {
            left:-10%;
            top:-25%;
        }
        & .yellow-gear {
            left:52%;
            top:-60%;
        }
        & .gray-gear {
            left:34%;
            top:-80%;
        }
    }
    @keyframes gearSpin {
        0% {
            transform: none;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    & #arrow3 {
        grid-row:1;
        grid-column: 3;
        justify-self: center;
        align-self: center;
    }

    & #arrow4 {
        grid-row:2;
        grid-column: 2;
        justify-self: center;
        align-self: center;
    }
    @media (max-width:960px) {
        & #arrow3 {
            grid-row:1;
            grid-column: 1;
        }

        & #arrow4 {
            grid-row: 3;
            grid-column: 1;
            transform: rotate(-90deg) !important;
        }
    }

`

const Header = styled.header`
    background-color: var(--yellow);
    color:var(--active-font-color);
    padding: 0 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20em;
    
    & em {
        font-size: 1.5em;
    }

    & img {
        width: 100%;
        height: 100%;
        min-width:300px;
        max-width: 310px;
        border:solid 8px white;
        position: relative;
        box-shadow: 1px 0 16px #1b1900;
        object-fit: cover;
        bottom:-15em;
    }
    @media (max-width:800px) {
    & {
        flex-direction: column;
        justify-content: center;
    }
    }
`
const PhdImage = styled.div`
    width: 100%;
    height: 100%;
    min-width:300px;
    max-width: 310px;
    border:solid 8px white;
    position: relative;
    box-shadow: 1px 0 16px #1b1900;
    object-fit: cover;
    bottom:-15em;
    & * {
        display:block !important;
    }
`

const Text = styled.div`
    max-width: 600px;
    margin-bottom: 2em;
    position: relative;
    @media (max-width:800px) {
        & {
            top:5em;
        }
    }
`
const Video = styled.section`
    display: flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:4em;
    margin:4em 1em;
    & h2 {
        margin-bottom: 0.5em;
    }
    & video {
        border:solid 8px var(--yellow);
        border-radius: 2px;
        width: 100%;
        max-width: 480px;
        box-shadow: 1px 0px 16px #131100;
    }
`

const Process = styled.section`
    padding: 5em;
    display:flex;
    justify-content:center;
    background-color: var(--yellow);
    box-shadow: inset 0 10px 16px black;

    & span {
        font-size: 3em;
    }
    & #box1 {
        grid-column: 1;
        grid-row:1
    }
    & #box2 {
        grid-column: 3;
        grid-row:1;
    }

    & #box3 {
        grid-column: 5;
        grid-row:1;
    }
    & #arrow1 {
        grid-column: 2;
        grid-row:1;
        align-self: center;
        justify-self: center;
    } 
    & #arrow2 {
        grid-column: 4;
        grid-row:1;
        align-self: center;
        justify-self: center;
    }
    @media (max-width:1430px) {
        & #box3 {
            grid-row:3;
            grid-column: 3;
        }
        & #arrow2 {
            grid-row:2;
            grid-column: 3;
            transform: rotate(90deg) !important;
        }
    }
    @media (max-width:915px) {
        & #box2 {
            grid-row:3;
            grid-column: 1;
        }
        & #arrow1 {
            grid-row:2;
            grid-column: 1;
            transform: rotate(90deg) !important;
        }
        & #box3 {
            grid-row:5;
            grid-column: 1;
        }
        & #arrow2 {
            grid-row:4;
            grid-column: 1;
            transform: rotate(90deg) !important;
        }
    }

`

const Grid = styled.div`
    align-self: center;
    display:grid;
`

const Box = styled.div`
    width: 18em;
    height: 18em;
    grid-column: 1;
    padding:3em;
    background-color: var(--theme-mid);
    border-radius: 8px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 1px 0 16px #363100;
    align-self: center;

    &#box1 h2 {
        font-size:1.5em;
    }
    @media (max-width:400px) {
        & {
        width: 12em;
        height: 60%;
        }
    }
`
const GearBox = styled(Box)`
    height: 50%;
    & h2 {
        font-size: 1.5em !important;
        margin:0 auto;
        position: relative;
        top:-6em;   
        margin-bottom: -4em;
    }
`

const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & img {
        margin-right:1em;
        width: 30%;
    }
    & div {
        margin:1em;
        margin-left: 2em;
    }
`

const Recog = styled.section`
    padding:3em;
    box-shadow: inset 0 10px 16px black;
    display:grid;
    align-items: center;
    justify-content: center;
    & .right-arrow #path {
        fill:var(--yellow);
    }
`

const YoloCpu = styled.div`
    grid-row:2;
    grid-column: 3;
    & img {
        max-width:90%;
    }
    @media (max-width:960px) {
        &  {
            grid-row:2;
            grid-column: 1;
        }
    }
`

const DrawContainer = styled.div`
    grid-row:2;
    grid-column: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width:960px) {
        & {
            grid-row:4 !important;
            grid-column: 1;
        }
    }
`
//#endregion "Style"


export default function Phd()  {
    const drawCountUp = (end: number) => {
        return (
            <CountUp end={end} duration={1}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
        );
    }
    return (
        <>
            <Head>
                <title>Phd - Kauer András</title>
            </Head>
            <StyledPhd>
                <Header>
                    <Text>
                        <h1>Phd</h1>
                        <em>Társszerzője vagyok egy Phd-nek ami kézírás felismérés teknikákkal foglalkozik. Az én feladatom volt implementálni a papír tartalmát, illetve szerepet vállaltam a tervezésben is.</em>
                    </Text>
                    <Fade triggerOnce><PhdImage><Image src="/static/phd.png" width={310} height={400}/></PhdImage></Fade>
                </Header>
                <Video>
                    <Text>
                        <h2>CNN felismerés</h2>
                        <em>Az első működő prototípusa a projektnek. Ez viszont nem tudja magától megtalálni a betűket. Éppen ezért az az ötletem támadt, hogy a YOLO technológiát kéne használnunk a jővőben, aminek egy demoja lentebb látható.</em>
                    </Text>
                    <Fade triggerOnce>
                        <video width="640" controls>
                            <source src="static/cnn.mp4" type="video/mp4" />
                        </video>
                    </Fade>
                </Video>
                <Process>
                    <Grid>
                    <Box id="box1">
                        <h2>Feldolgozott Dokumentumok</h2>
                        {drawCountUp(388)}
                        <h2>Begyűjtött betűk</h2>
                        {drawCountUp(78000)}
                        <h2>Augmentálással</h2>
                        {drawCountUp(156000)}
                    </Box>
                    <Arrow id="arrow1" />
                    <GearBox id="box2">
                        <Gear customClass="blue-gear gear" />
                        <Gear customClass="yellow-gear gear" />
                        <Gear customClass="gray-gear gear" />
                        <h2>Python feldolgozás</h2>
                    </GearBox>
                    <Arrow id="arrow2" />
                    <Box id="box3">
                        <Line><img src={"static/lines.svg"} /><div>{drawCountUp(70000)}<h2>Sor Sherlock</h2></div></Line>
                        <Line><img src={"static/gan.svg"} /><div>{drawCountUp(78 * 500)}<h2>GAN generált betű</h2></div></Line>
                    </Box>
                    </Grid>
                </Process>
                <Recog>
                    <DrawContainer>
                        <YoloRecog />
                    </DrawContainer>
                    <Arrow deg={180} id="arrow4" />
                    <Arrow deg={90} id="arrow3" />
                    <YoloCpu>
                        <Fade triggerOnce>
                            <img src={"static/yolocpu.svg"} width="500px" />
                        </Fade>
                    </YoloCpu>
                </Recog>
            </StyledPhd>
        </>
    );
}