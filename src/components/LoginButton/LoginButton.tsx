import '../../index.css';
import './LoginButton.css'
import React, { useEffect, useState } from 'react';
import settingsIcon from './images/settings.png'
import { doGoogleSignIn, signOut, auth } from '../../firebase';

const LoginButton = () => {
    const [userProfile, setUserProfile] = useState<string|null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);

    const authUser = () => {
        if (!loggedIn) {
            doGoogleSignIn().then((cred) => {
                if (cred.user != null && cred.user.photoURL) {
                    setUserProfile(cred.user.photoURL);
                    setLoggedIn(true);
                    if (cred.user.email === "thekauer@gmail.com") {
                        setLoggedInAsAdmin(true);
                    }
                }
            })
        } else {
            signOut().then(() => {
                setUserProfile(null);
                setLoggedIn(false);
                setLoggedInAsAdmin(false);
            })
        }
    }
    const toAdminPage = () => {
        document.location.host = "admin." + document.location.host;
    }

    return (
        <>
            <div className="loginbtn">
            {loggedInAsAdmin && <img src={settingsIcon} className="usr-icon" alt="gear" onClick={toAdminPage}></img>}
            <div className="profile" onClick={authUser}>
            {userProfile ? <img src={userProfile} alt="Profile" className="usr-icon"/> :
            <svg width="16px" height="16px" className="usr-icon" fill="none" viewBox="0 0 600 600" strokeWidth="30px">
                <circle cx="300" cy="300" r="265" />
                <circle cx="300" cy="230" r="115"/>
                <path d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0" stroke-linecap="butt" />
            </svg>
            }
            </div>
            </div>
        </>
    );
}

export default LoginButton;