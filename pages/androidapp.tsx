import Head from 'next/head';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { appDesc, appName } from '../content';
import { Fade } from 'react-awesome-reveal';
import { ExperienceDescription } from '../components/ExperienceDescription';
import { PhoneAppIcons } from '../icons';

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
    word-break:break-word;
    padding:5em 1em;
    background: linear-gradient(to bottom right,var(--green) 0%,#00ffff 100%);
    box-shadow:0 7px 20px rgba(0,0,0,0.5);
    & h1 {
        font-size:15vmin;
    }
`
const videoWidth = 0.75 * 288;
const videoHeight = 0.75 * 640;
const Phone = styled.div`
    width:${videoWidth}px;
    height:${videoHeight}px;
    overflow:hidden;
    border-radius:15px;
    margin:1em;
    box-shadow: 0 10px 32px #001b2e;
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
    & p {
        margin:1em;
    }
`
const Paragraph = styled.div`
    width: clamp(28ch,70ch,90ch);
    padding:1em;
    border-radius:15px;
    backdrop-filter:blur(50px);
    margin:2em 1em;
    & h2 {
        margin-bottom:0.5em;
    }
    & p{
        margin:1em 0;
    }
`

const WaveSection = styled.section`
    background-image: url('/static/waves.svg');
    background-size: cover;
    background-repeat:no-repeat;
    background-position:bottom left;
    width:100vw;
    height:clamp(320px,756px,1500px);
    margin-top:-7em;
    padding:7em 0;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`
const Row = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0.75em 0;
`
const Icon = styled.div<{ path: string }>`
    width:2em;
    height:2em;
    margin-right:0.5em;
    background: linear-gradient(to bottom right,var(--green) 0%,#00ffff 100%); 
    mask: url(${(props: any) => props.path}) no-repeat center / contain;
`
const Cabinet = styled(Row)`
    justify-content:space-evenly;
    margin-top:2em;
    & img {
        width:4em;
    }
`
const Column = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:3em;
`
export default function AndroidApp() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loaded, setLoaded] = useState(false);
    const videoClick = () => {
        const vid = videoRef.current;
        if (!loaded) {
            vid?.load();
            setLoaded(true);
        }
        vid?.paused ? vid?.play() : vid?.pause();
    }

    const props = {
        width: videoWidth,
        height: videoHeight,
        onClick: videoClick,
        ref: videoRef,
        preload: "none",
        poster: "/static/appthumb.png"
    }
    const xpprops = {
        link:"https://gist.github.com/thekauer/45c71636e70fb5989114e62a27359d2a",
        icons: PhoneAppIcons
    }

    const list = [
        {path:'/static/add.svg',name:'hozzáadás'},
        {path:"/static/remove.svg",name:'Törlés'},
        {path:"/static/edit.svg",name:"Szerkesztés"},
        {path:"/static/place.svg",name:"GPS"},
        {path:"/static/exif.svg",name:"Exif helymeghatározás"},
        {path:"/static/import_export.svg",name:"Importálás/Exportálás"}
                ];
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
                        <p>
                            <em>Az alkalmazásban lehetőség van adatok:</em>
                            { list.map( (item,idx) => 
                                (<Fade delay={idx*100} triggerOnce><Row><Icon path={item.path} />{item.name}</Row></Fade>) 
                            )}
                        </p>
                    <Column>
                    <Phone>
                    <Fade triggerOnce>
                    <video {...props}>
                        <source type="video/mp4" src="/static/app.mp4" />
                    </video>
                    </Fade>
                    </Phone>
                    <em>Kattits a lejátszáshoz</em>
                    </Column>
                </VideoSection>
                <WaveSection>
                <ExperienceDescription {...xpprops}>
                <h2>Az alkalmazásról</h2>
                <p>Egy ismerős cég megkérésére készítettem. Gyakorlatialg azzal foglalkoznak, hogy amikor a körzetükben valakinél megszólal a riasztó, akkor ők mennek ki. Ezt úgy oldották meg, hogy mindig volt egy készenléti diszpécser és autós. A diszpécser, ha riasztanak, felhívja az autóst és bemondja a hely kódját, amit utánna ki kell keresnie egy nagy papírhalomból és ha megtalálta akkor indult. Az alkalmazás segítségével viszont csak beírja az általában 4 jegyű kódot és a telefon már naviglás is. Az is problémát jelentett, hogy gyakran a cím még nem elég, hogy megtalálják, hogy pontosan hova kell menni. Ezért az alkalmazásban lehetőség van képet készíteni és a képből már tudja is az app, hogy hova kell menni.</p>
                </ExperienceDescription>
                </WaveSection>
            </StyledAndroid>
        </>
    );
}