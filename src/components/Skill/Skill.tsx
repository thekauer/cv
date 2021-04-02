import './Skill.css'
import '../../index.css'
import React from 'react';

interface SkillProps {
    title : string,
    children : any
};
const Skill : React.FC<SkillProps> = ({ title, children }) => {
    return (
        <article className="skill">
            <header><h3><span>{title}</span></h3></header>
            <p>{children}</p>
        </article>
    );
}

interface SkillContainerProps {
    children : any
};
const SkillContainer : React.FC<SkillContainerProps> = ({ children }) => {
    return (
        <>
        <header><h2>Skillek</h2></header>
            <div className="skill-container">
                {children}
            </div>
        </>

    );
}
export {Skill,SkillContainer};