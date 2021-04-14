import '../../index.css'
import React from 'react';
import { MoreButton } from '../MoreButton/MoreButton';
import {Zoom} from 'react-awesome-reveal'
import styled from 'styled-components';

const StyledExperience = styled.section`
    & header h3 {
        font-size:2em;
    }
    & em {
        max-width: 40ch;
    }
`
const Icons = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const StyledIcon = styled.img`
    width: 2em;
    height: 2em;
    margin-top:0.3em;
    margin-right: 1em;
    margin-bottom: 1em;
`
interface ExperienceProps {
    title : string,
    desc : string,
    path : string,
    icons : any,
};
const Experience : React.FC<ExperienceProps> = ({title,desc,path,icons}) => {
    return (
        <>
        <StyledExperience>
        <header>
            <h3>{title}</h3>
        </header>
        <em>{desc}</em>
        <Icons>
            {icons}
        </Icons>
        <MoreButton to={path}/>
        </StyledExperience>
    </>
    );
}
interface IconProps {
    src: string,
    alt : string
}
const Icon : React.FC<IconProps> = ({src,alt}) => {
    return (
        <>
        <Zoom cascade triggerOnce delay={200} fraction={1}>
        <StyledIcon src={src} alt={alt}/>
        </Zoom> 
        </>
    );
}

export {Experience,Icon};