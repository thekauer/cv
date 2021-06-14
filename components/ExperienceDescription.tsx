import styled from "styled-components"
import { IIcons } from "@utils/icons"
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';
const Row = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0.75em 0;
`
const Cabinet = styled(Row)`
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin-top:2em;
    & img {
        width:4em;
        margin:0.5em 1em;
    }
`
const Img = styled.div`
    margin:0.5em 1em;
`
const Paragraph = styled.div`
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
    & figure {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin:2em 0;
    }
    & figure img {
        box-shadow: 0 0 32px #00000038;
        max-width:100%;
    }
    & figcaption {
        font-style:italic;
        margin-top:0.5em;
    }
`
const Center = styled.div`
    align-self: center;
    justify-self:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: clamp(28ch,70ch,90ch);
    max-width:90%;
`
interface ExperienceDescriptionProps {
    children? : any;
    link:string;
    icons : IIcons[];
}
export const ExperienceDescription = ({children,link,icons} : ExperienceDescriptionProps) => (
    <Center>
    <Paragraph>
        {children}
    <Cabinet>
        {
        icons.map(({src,alt},idx) => (
        <>
        <Fade triggerOnce delay={(idx+1)*100}>
            <Img><Image src={src} alt={alt} key={idx+1} width={64} height={64}/></Img>
        </Fade>
        </>
        ))
        }
        <Fade triggerOnce delay={(icons.length+1)*100}>
            <a href={link} target="_blank"><Image src="/static/github.svg" key={0} width={64} height={64}/></a>
        </Fade>
    </Cabinet>
    </Paragraph>
    </Center>
)