import styled from "styled-components"
import { IIcons } from "../icons"
const Row = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0.75em 0;
`
const Cabinet = styled(Row)`
    justify-content:space-evenly;
    margin-top:2em;
    & img {
        width:4em;
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
interface ExperienceDescriptionProps {
    children? : any;
    link:string;
    icons : IIcons[];
}
export const ExperienceDescription = ({children,link,icons} : ExperienceDescriptionProps) => (
    <Paragraph>
        {children}
    <Cabinet>
        {icons.map(({src,alt})=>(<img src={src} alt={alt}/>))}
        <a href={link} target="_blank"><img src="/static/github.svg"/></a>
    </Cabinet>
    </Paragraph>
)