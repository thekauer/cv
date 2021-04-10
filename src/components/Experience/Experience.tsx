import '../../index.css'
import './Experience.css'
import React from 'react';
import { MoreButton } from '../MoreButton/MoreButton';

interface ExperienceProps {
    title : string,
    desc : string,
    path : string,
    icons : any,
};
const Experience : React.FC<ExperienceProps> = ({title,desc,path,icons}) => {
    return (
        <>
        <section>
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
        <img src={src} alt={alt} className="icon"/>
        </>
    );
}

export {Experience,Icon};