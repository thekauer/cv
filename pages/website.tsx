import { Carousel } from '../components/Carousel';
import styled from 'styled-components'
import {cvDesc} from '../content'
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

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
        </StyledWebsite>
        </>
    );
}