import '../../index.css'
import './Experience.css'
import React from 'react';
import { MoreButton } from '../MoreButton/MoreButton';
import {Zoom} from 'react-awesome-reveal'

interface ExperienceProps {
    title : string,
    desc : string,
    path : string,
    icons : any,
};
const Experience : React.FC<ExperienceProps> = ({title,desc,path,icons}) => {
    return (
        <>
        <section className="experience">
        <header>
            <h3>{title}</h3>
        </header>
        <em>{desc}</em>
        <div className="icons">
            {icons}
        </div>
        <MoreButton to={path}/>
        </section>
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
        <img src={src} alt={alt} className="icon"/>
        </Zoom> 
        </>
    );
}

export {Experience,Icon};