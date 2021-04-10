import './Toolbar.css';
import '../../index.css';
import {NavLink, Switch} from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import  React, { useState } from 'react';
import Sw from 'react-switch';
import sun from './images/sun.svg';
import moon from './images/moon.svg';

interface ToolbarProps {
    checked : boolean,
    setChecked : React.Dispatch<React.SetStateAction<boolean>>
};
const Toolbar = ({checked,setChecked} : ToolbarProps) => {
    const sunIcon = (<div className="sw-container"><img src={sun} alt="sun" className="sw-icon"/></div>);
    const moonIcon = (<div className="sw-container"><img src={moon} alt="moon" className="sw-icon"/></div>);
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
        <nav className="nav">
                    <ul>
                        <li><NavLink activeClassName="active" exact to="/">Főoldal</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/resume">Resume</NavLink></li>
                        <li><NavLink activeClassName="active" strict to="/blog/">Blog</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/contacts">Kapcsolat</NavLink></li>
                        <div className="leftmost"><div className="row"><Sw {...swProps}/><LoginButton/></div></div>
                    </ul>
        </nav>
        </>
    );
}

export default Toolbar;