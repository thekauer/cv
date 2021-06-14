import { Carousel } from '../components/Carousel';
import styled from 'styled-components'
import {cvDesc} from '@utils/content'
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import { WebsiteIcons } from '@utils/icons';
import { ExperienceDescription } from '@components/ExperienceDescription';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    word-break:break-word;
    padding:5em 1em;
    background: linear-gradient(to bottom right,var(--blue) 0%,var(--react) 100%); 
    box-shadow:0 7px 20px rgba(0,0,0,0.5);
    & h1 {
        font-size:15vmin;
        color:white;
    }
    & em {
        color:white;
    }
`
const Icon = styled.div<{ path: string }>`
    width:2em;
    height:2em;
    margin-right:0.5em;
    background: linear-gradient(to bottom right,var(--blue) 0%,var(--react) 100%); 
    mask: url(${(props: any) => props.path}) no-repeat center / contain;
`
const Row = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0.75em 0;
`
const StyledWebsite = styled.div`
    display:flex;
    flex-direction: column;

`
const CarouselSection = styled.section`
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
const Icons = styled.div`
    display:flex;
    flex-direction: column;
`

export default function Website() {
    const xpprops = {
        link:"https://www.github.com/thekauer/cv",
        icons: WebsiteIcons
    }
    const imgs = [
        '/static/website_stats.jpeg',
        '/static/website_mails.jpeg',
        '/static/website_posts.jpeg'
    ];
    const carouselProps = {
        imgs:imgs,
        length:10
    }
    const list = [
        {path:'/static/add.svg',name:'Blog postok hozzáadása'},
        {path:"/static/remove.svg",name:'Blog postok/üzenetek törlése'},
        {path:"/static/edit.svg",name:"Blog postok szerkesztése "},
        {path:"/static/md.svg",name:"Markdown és Katex támogatás"},
        {path:"/static/statistics.svg",name:"Látogatottsági statisztikák"},
        {path:"/static/theme.svg",name:"Téma váltó"},
        {path:"/static/login.svg",name:"Hitelesítés"}
    ];
    return (
        <>
        <StyledWebsite>
        <Header>
            <div>
                <h1>React webolald</h1>
                <em>{cvDesc}</em>
            </div>
        </Header>
        <CarouselSection>
            <Icons>
            { list.map( (item,idx) => 
                (<Fade delay={idx*100} triggerOnce key={idx}><Row><Icon path={item.path} />{item.name}</Row></Fade>) 
            )}
            </Icons>
            <Carousel {...carouselProps}/>
        </CarouselSection>
        <ExperienceDescription {...xpprops}>
                <h2>A weblapról</h2>
                <p>Eredetileg az egyetemen volt feladat egy egyszerű html/css oldal elkészítése. Úgy döntöttem, hogy az enyém témája az önéletrajzom lesz. Nagyon megtetszett és mindig is ki akartam magam próbálni webfejlesztésben. Ezért átírtam React-ra a beadandómat, ami annyira megtetszett, hogy elkezdtem komolyabban is foglalkozni vele.</p>
                <p>Először még javascriptben írtam, de elég hamar rájöttem, hogy a typescript nagyon sok hibától megment, és amúgy is a típusos nyelvekhez vagyok szokva, így át írtam az oldalt typescriptre. Ekkor még számtalan .css fájlba volt szétszórva az oldal stílusa. Épp miközben azon gondolkoztam, hogy átírjam javascripten belüli stílusokra az oldalt, akkor találtam rá a styled-components-re, ami szerintem jelentősen átláthatóbbá tette a kódot. Bár a témaváltás még mindig az eredeti css-es megoldással működik.</p>
                <p>Ez után találkoztam a Next.js-el, amit mindenképpen ki akartam próbálni és bár még nem igazán használja ki az oldalam eddig nagyon tetszik a keretrendszer. Talán valamikor az után, hogy átírtam az oldalt, hogy Next.js-t használjon már egészen sok mindennel el voltam készülve, ezért beváltottam a Github student packom. Ebből lett egy .me-s domainem, és herokuról egy szerver a backendnek. A frontendet felraktam Vercel-re és azóta live az oldal. Készítettem hozzá, hítelesítést firebase-el, és van egy kisebb adatbázisom is firestore-on. Ezen az adatbázison tárolom például a blogpostokat, az üzeneteket, illetve az adatokat a statisztikákhoz, amit az admin felületen lehet elérni. Utóbbihoz direkt nem akartam sütiket vagy Google Analytics-et használni. </p>
                <p>Mivel a frontendre koncentráltam a backend egyelőre elég csekély. Egyedül a betű felismerés van rajta, ehhez a Phd-hez készített modellemet használja. Ezt Node.js-el és javascriptel csináltam bár gyakorlatilag csak glue kódot írtam az eredeti python programomhoz. Majd ezt Dockerrel virtualizáltam, ez is egy olyan technológia, amit mindenképp ki akartam a próbálni.</p>
                <p>Bár a legfontosabb alapfunkciók már szinte készen vannak, még számos dolog van, amit a jövőben szeretnék fejleszteni az oldalon. A lista első helyén egyértelműen a unit tesztek vannak. Ezen kívül a firestore-on lévő adatbázis először részben, később teljesen szeretném átrakni egy PostgreSql adatbázisba és ehhez elkészíteni a saját api-mat valószínűleg GraphQl-el.</p>
        </ExperienceDescription>
        </StyledWebsite>
        </>
    );
}