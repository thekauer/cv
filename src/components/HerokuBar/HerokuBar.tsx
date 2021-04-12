import '../../index.css'
import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import styled,{StyledComponent} from 'styled-components';
import loadingAnim from './static/loading.svg'
interface BarWrapperProps {
    color:string,
    display:boolean
}

const BarWrapper  = styled.div<BarWrapperProps>`
display:flex;
visibility:${({display})  => display ? "visible" : "hidden"};
opacity:${({display})  => display ? "1" : "0"};
background-color: ${({color})=>color};
flex-direction: row;
justify-content: center;
align-items: center;
box-shadow: 0 0 16px black;
border-radius: 5px;
padding:0.5em 1em;
margin-bottom: 1em;
color:black;
max-width:35ch;
`

const BarImg = styled.img`
height:2em;
margin-right:1em;
`
const BarText = styled.span`
color:black;
`

interface HerokuBarProps {
    color: string,
}
export const HerokuBar = ({color} : HerokuBarProps) => {
    const {loading} = useContext(HerokuContext);
    return (
        <>
            <BarWrapper display={loading} color={color}>
                <div>
                <BarImg src={loadingAnim} style={{height:"2em"}}></BarImg>
                </div>
                <div>
                <BarText>Az ingyenes Heroku backendem még ébredezik. Addig nyugodtan nézz körül.</BarText>
                </div>
            </BarWrapper>
        </>
    );
}
export const HerokuContext = React.createContext({loading:true});