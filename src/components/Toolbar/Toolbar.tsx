import '../../index.css';
import {NavLink} from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import  React from 'react';
import Sw from 'react-switch';
import sun from './images/sun.svg';
import moon from './images/moon.svg';
import styled from 'styled-components';


const Nav = styled.nav`
    padding:0.5em 0em;
    background-color: var(--theme-mid);
    font-family: Consolas,Arial, Helvetica, sans-serif;
    max-height: 1.1em;
    overflow-x: auto;
    overflow-y: hidden;

    & .active {
        background-color: var(--theme-dark) !important;
        color:var(--active-font-color) !important;
    }
    &::-webkit-scrollbar {
        display:none;
    }
    & a {
        background-color: var(--theme-light);
        color:var(--nav-font-color);
        text-decoration: none;
        padding:0.5em;
        border-right: solid 1px var(--nav-border);
    }
    & ul {
        list-style: none;
        display: flex;
        text-align: left;
    }

`

const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const SwitchIcon = styled.img`
    height: 80%;
`
const NavRight = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1em;
    margin-left:auto;
`
interface ToolbarProps {
    checked : boolean,
    setChecked : React.Dispatch<React.SetStateAction<boolean>>
};
const Toolbar = ({checked,setChecked} : ToolbarProps) => {
    const sunIcon = (<SwitchContainer><SwitchIcon src={sun} alt="sun" className="sw-icon"/></SwitchContainer>);
    const moonIcon = (<SwitchContainer><SwitchIcon src={moon} alt="moon" className="sw-icon"/></SwitchContainer>);
    const swProps = {
        onChange:setChecked,
        checked:checked,
        height:20,
        width:48,
        checkedIcon:moonIcon,
        uncheckedIcon:sunIcon,
        onColor:"#252526",
        offColor:"#eaeaeb"
    };
    return (
        <>
        <Nav>
                    <ul>
                        <li><NavLink activeClassName="active" exact to="/">Főoldal</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/resume">Resume</NavLink></li>
                        <li><NavLink activeClassName="active" strict to="/blog/">Blog</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/contacts">Kapcsolat</NavLink></li>
                        <NavRight><Sw {...swProps}/><LoginButton/></NavRight>
                    </ul>
        </Nav>
        </>
    );
}

export default Toolbar;