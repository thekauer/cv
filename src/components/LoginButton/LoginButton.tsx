import '../../index.css';
import './LoginButton.css'
import React, { useEffect, useState } from 'react';
import usrIcon from './images/usr.svg';
import settingsIcon from './images/settings.png'
import {  doGoogleSignIn, signOut,auth } from '../../firebase';

const LoginButton = () => {
    const [userProfile, setUserProfile]   = useState(usrIcon.toString());
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);

    const authUser = () => {
        if (!loggedIn) {
            doGoogleSignIn().then((cred) => {
                    if(cred.user!=null && cred.user.photoURL) {
                    setUserProfile(cred.user.photoURL);
                    setLoggedIn(true);
                    if (cred.user.email === "thekauer@gmail.com") {
                        setLoggedInAsAdmin(true);
                    }
                }
            })
        } else {
            signOut().then(() => {
                setUserProfile(usrIcon);
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
            {loggedInAsAdmin && <img src={settingsIcon} className="usr-icon leftmost" alt="gear" onClick={toAdminPage}></img>}

            <img src={userProfile} alt="" className="usr-icon" onClick={authUser}/>
        </>
    );
}

export default LoginButton;