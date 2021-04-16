import Head from 'next/head';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { appDesc, appName } from '../content';
;

const StyledAndroid = styled.article`
    & * {
        color:var(--active-font-color);
    }
`
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    word-wrap:wrap;
    padding:5em 0;
    background-color: var(--green);
`
const videoWidth = 0.75*288;
const videoHeight = 0.75*640;
const Phone = styled.div`
    width:${videoWidth}px;
    height:${videoHeight}px;
    overflow:hidden;
    border-radius:15px;
    margin:1em;
    box-shadow: 2px 2px 64px black;
    background-color:white;
`

const VideoSection = styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    margin:2em 0;
    gap:2em;
`
const Paragraph = styled.div`
    width: clamp(28ch,50ch,60ch);
    padding:0 1em;
    margin:2em 0;
    & h2 {
        margin-bottom:0.5em;
    }
    & p{
        margin:1em 0;
    }
`
export default function AndroidApp() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loaded,setLoaded] = useState(false);
    const videoClick = () => {
        const vid = videoRef.current;
        if(!loaded) {
            vid?.load();
            setLoaded(true);
        }
        vid?.paused ? vid?.play() : vid?.pause();
    }

    const props = {
        width:videoWidth,
        height:videoHeight,
        onClick:videoClick,
        ref:videoRef,
        preload:"none",
        poster:"/static/appthumb.png"
    }
    return (
        <>
            <Head>
                <title>Android Alkalmazás - Kauer András</title>
            </Head>
            <StyledAndroid>
                <Header>
                    <div>
                    <h1>{appName}</h1>
                    <em>{appDesc}</em>
                    </div>
                </Header>
                <VideoSection>
                    <Paragraph>
                        <h2>Az alkalmazás</h2>
                        <p>Egy ismerős cég megkérésére készítettem. Gyakorlatialg azzal foglalkoznak, hogy amikor a körzetükben valakinél megszólal a riasztó, akkor ők mennek ki. Ezt úgy oldották meg, hogy mindig volt egy készenléti diszpécser és autós. A diszpécser, ha riasztanak, felhívja az autóst és bemondja a hely kódját, amit utánna ki kell keresnie egy nagy papírhalomból és ha megtalálta akkor indult. Az alkalmazás segítségével viszont csak beírja az általában 4 jegyű kódot és a telefon már naviglás is. Az is problémát jelentett, hogy gyakran a cím még nem elég, hogy megtalálják, hogy pontosan hova kell menni. Ezért az alkalmazásban lehetőség van képet készíteni és a képből már tudja is az app, hogy hova kell menni.</p>
                        <p><em>Az alkalmazásban lehetőség van adatok hozzáadására, törlésére, módosítására. A címekhez lehet egy képet rendelni amiből az alkalmazás ki tudja nyerni a hejadatokat. De a telefon jelenlegi hej adatait is tudjuk használni, vagy csak egyszerűen be is írhatjuk a címet.</em></p>
                        <p><em>Ezen kívül lehetőség van importálni és exportálni az adatokat, illetve el van látva egy okos importálás funkcióval is aminek a segítségével csak az új adatokat adjuk az adatbázishoz.</em></p>
                    </Paragraph>
                    <Phone><video {...props}>
                        <source type="video/mp4" src="/static/app.mp4"/>
                        </video>
                    </Phone>
                </VideoSection>

            </StyledAndroid>
        </>
    );
}