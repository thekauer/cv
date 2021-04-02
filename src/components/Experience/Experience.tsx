import '../../index.css'
import './Experience.css'
import React from 'react';

interface ExperienceProps {
    title : string,
    icons : any,
    children :any
};
const Experience : React.FC<ExperienceProps> = ({title,icons,children}) => {
    return (
        <>
        <section>
        <header>
            <h3>{title}</h3>
        </header>
        <details>
            <summary>
        <i>llvm alapú, fordított programozási nyelv</i>
    </summary>
        <div className="icons">
            {icons}
        </div>
        <section className="desc">
            {children}
        </section>
    </details>
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