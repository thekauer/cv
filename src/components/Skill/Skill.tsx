import '../../index.css'
import React from 'react';
import styled from 'styled-components';


const StyledSkill = styled.article`
    margin:1.5em;
    box-shadow: inset 0 0 5px black;
    border-radius: 10px;
    padding:1.5em;
    margin-bottom: 2em;
    justify-content:space-evenly;
    transition: all var(--transition-time) ease;
    transition-delay: 100ms;
    width: 28ch;
    color:var(--active-font-color);

    &:hover {
        box-shadow: inset 0 0 5px black,0 0 10px rgba(0, 0, 0, 0.5);
    }

    & span {
        top:-2em;
        position: relative;
        background-color: var(--theme-dark);
        padding:0.7em;
    }
    & h3 {
        font-size: 1.25em;
    }
`
interface SkillProps {
    title : string,
    children : any
};
export const Skill : React.FC<SkillProps> = ({ title, children }) => {
    return (
        <StyledSkill>
            <header><h3><span>{title}</span></h3></header>
            <p>{children}</p>
        </StyledSkill>
    );
}
