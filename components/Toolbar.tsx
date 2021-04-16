import LoginButton from './LoginButton';
import  React from 'react';
import Sw from 'react-switch';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';


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
const SwitchIcon = styled(Image)`
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
    const router = useRouter();
    const sunIcon = (<SwitchContainer><SwitchIcon src={"/static/sun.svg"} alt="sun" height={20} width={30}/></SwitchContainer>);
    const moonIcon = (<SwitchContainer><SwitchIcon src={"/static/moon.svg"} alt="moon" height={20} width={30}/></SwitchContainer>);
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
                        <li><ActiveLink href="/" activeClassName="active"><a>Főoldal</a></ActiveLink></li>
                        <li><ActiveLink href="/resume" activeClassName="active"><a>Resume</a></ActiveLink></li>
                        <li><ActiveLink href="/blog/" activeClassName="active" matchAny={true}><a>Blog</a></ActiveLink></li>
                        <li><ActiveLink href="/contacts" activeClassName="active"><a>Kapcsolat</a></ActiveLink></li>
                        <NavRight><Sw {...swProps}/><LoginButton/></NavRight>
                    </ul>
        </Nav>
        </>
    );
}

export default Toolbar;