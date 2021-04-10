import './Skill.css'
import '../../index.css'
import React from 'react';

interface SkillProps {
    title : string,
    children : any
};
export const Skill : React.FC<SkillProps> = ({ title, children }) => {
    return (
        <article className="skill">
            <header><h3><span>{title}</span></h3></header>
            <p>{children}</p>
        </article>
    );
}
