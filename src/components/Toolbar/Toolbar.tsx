import './Toolbar.css';
import '../../index.css';
import {NavLink} from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import  React from 'react';

interface ToolbarProps {};
const Toolbar : React.FC<ToolbarProps> = () => {
    return (
        <>
        <nav className="nav">
                    <ul>
                        <li><NavLink activeClassName="active" exact to="/">Főoldal</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/resume">Resume</NavLink></li>
                        <li><NavLink activeClassName="active" strict to="/blog/">Blog</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/contacts">Kapcsolat</NavLink></li>
                        <div className="leftmost"><LoginButton></LoginButton></div>
                    </ul>
        </nav>
        </>
    );
}

export default Toolbar;