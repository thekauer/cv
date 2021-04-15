
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { MoreButton } from './MoreButton';
import styled from 'styled-components';


const StyledPortfolioCard = styled.article<any>`
    display:flex;
    width: clamp(30ch,40ch,40ch);
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--theme-dark);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);   
    border-radius: 5px;
    overflow: hidden;
    margin: 2em;
    padding:1em;
    transition: var(--transition-time);
    border-bottom-width: 8px;
    border-bottom-style: solid;
    border-bottom-color:${props =>props.color};
    color: var(--font-color);
    &:hover {
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.5);  
        transform: translateY(-10px);
    }
    & img {
        object-fit: cover;
        width: 10em;
    }

`
const Header = styled.header`
    display:flex;
    flex-direction: row;;
    justify-content: space-between;
`

const Content = styled.section`
    padding:1em;
    padding-top: 0.5em;
    & p {
        word-wrap: break-word;
        max-width: 300px;
        min-height: 4em;
        padding: 0;
    }
`
const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    padding:0 1em 1em 0.5em;
    margin:0 0.5em;
`
interface PortfolioCardProps {
    title : string;
    desc : string;
    color : string;
    icon : any | null;
    path : string;
};

const PortfolioCard : React.FC<PortfolioCardProps>  = ({title,desc,color,icon,path}) => {
    return (
        <StyledPortfolioCard color={color}>
            <Fade triggerOnce fraction={1}>
            <Content>
            <Header>
            <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            </div>
            {icon && <Fade><img src={icon} alt={title}></img></Fade>}
            </Header>
            </Content>
            </Fade>
            <Footer>
                <MoreButton to={path}/>
            </Footer>
        </StyledPortfolioCard>

    );
}
export default PortfolioCard;