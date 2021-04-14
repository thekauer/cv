import '../../index.css';
import { useEffect, useState } from 'react';
import settingsIcon from './images/settings.png'
import { doGoogleSignIn, signOut, auth, isMe } from '../../firebase';
import { useHistory } from 'react-router';
import styled from 'styled-components';



const StyledLoginButton = styled.div`
    display:flex;
    flex-direction: row;
    margin-right: 0.5em;
    height: 1em;
`
const UserIcon = styled.img`
    max-height: 1em;
    margin: 0 0.5em;
    justify-self: flex-end;
    border-radius: 100%;
    transition: var(--transition-time);
	stroke:var(--nav-font-color);
	stroke-width:30;
	fill:transparent;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px black;
        stroke: var(--active-font-color);
    }
`
const UserSvg = styled.svg`
    max-height: 1em;
    margin: 0 0.5em;
    justify-self: flex-end;
    border-radius: 100%;
    transition: var(--transition-time);
	stroke:var(--nav-font-color);
	stroke-width:30;
	fill:transparent;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px black;
        stroke: var(--active-font-color);
    }
`
const LoginButton = () => {
    useEffect(() =>{
        auth.onAuthStateChanged((user) => {
            if(user!=null) {
                setUserProfile(user.photoURL);
                setLoggedIn(true);
                if(isMe(user.uid)) {
                    setLoggedInAsAdmin(true);
                }
            }
        });
    },[])
    const [userProfile, setUserProfile] = useState<string|null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);
    let history = useHistory();
    const authUser = () => {
        if (!loggedIn) {
            doGoogleSignIn();
        } else {
            signOut().then(() => {
                setUserProfile(null);
                setLoggedIn(false);
                setLoggedInAsAdmin(false);
            })
        }
    }
    const toAdminPage = () => {
        history.push('/admin');
    }

    return (
        <>
            <StyledLoginButton>
            {loggedInAsAdmin && <UserIcon src={settingsIcon}  alt="gear" onClick={toAdminPage}/>}
            <div className="profile" onClick={authUser}>
            {userProfile ? <UserIcon src={userProfile} alt="Profile"/> :
            <UserSvg width="16px" height="16px" fill="none" viewBox="0 0 600 600" strokeWidth="30px">
                <circle cx="300" cy="300" r="265" />
                <circle cx="300" cy="230" r="115"/>
                <path d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0" stroke-linecap="butt" />
            </UserSvg>
            }
            </div>
            </StyledLoginButton>
        </>
    );
}

export default LoginButton;