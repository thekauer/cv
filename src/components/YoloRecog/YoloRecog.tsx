import '../../index.css';
import { ReactSketchCanvas } from "react-sketch-canvas";
import loadingAnim from './static/loading.svg'
import { useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const backend = process.env.REACT_APP_BACKEND;

const StyledYoloRecog = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    & .hidden {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    & .visible {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }

    & .sketch-canvas {
        object-fit: contain;
        background-repeat: no-repeat;
        border: none !important;
        box-shadow: 0 0 32px black;
        width: 20em !important; 
        height: 20em !important;
    }
`
const YoloButton = styled.button`
    margin:0 1em;
    padding:1em;
    background: var(--theme-mid);
    border:solid 3px var(--yellow);
    color:var(--font-color);
    font-weight: bolder;
    transition: var(--transition-time);
    
    &:hover {
        background-color: var(--yellow);
        color:var(--active-font-color);
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
`
const ButtonContainer = styled.div`
    padding:2em;
    display:flex;
    flex-direction: row;
`
const Result = styled.div`


    background-color: var(--yellow);
    position: absolute;
    top:0;
    display:flex;
    flex-direction: column;
    color:var(--active-font-color);
    justify-content: center;
    align-items: center;;
`

const DrawResult = styled.div`
    position: relative;
    transition: var(--transition-time);
`
const NotFound = styled.div`
    display:flex;
    flex-direction: column;
    & * {
        margin:1em;
    }
`
const Loader = styled.img`
    position: absolute;
`
interface RecogType {
    l: string, x: number, y: number, w: number, h: number, c: number;
}
export const YoloRecog = () => {
    const canvasRef = useRef<ReactSketchCanvas>(null);
    const erease = () => {
        setBb(null);
        if (canvasRef.current) {
            canvasRef.current.resetCanvas();
        }
    }
    const drawFound = (args: RecogType) => {
        const { l, x, y, w, h, c } = args;
        const bbClick = () => {
            setBb(null);
            erease();
        }
        return (
            <>
                <div style={{ position: "absolute", top: y + "px", left: x + "px", width: w + "px", height: h + "px", border: "4px solid #ffe600", backgroundColor: 'transparent' }} onClick={bbClick} />
                <div style={{ position: "absolute", top: y - 16 + "px", left: x, backgroundColor: "#ffe600", color: 'white',paddingRight:"2ch",paddingLeft:"1ch" }} onClick={bbClick}>{`${l} ${c}%`}</div>
            </>
        );
    }
    const [loading, setLoading] = useState(false);
    const [displayLoadingAnim, setDisplayLoadingAnim] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [bb, setBb] = useState<RecogType | null>(null);
    const send = () => {
        if (canvasRef.current) {
            setLoading(true);
            setDisplayLoadingAnim(true);
            canvasRef.current.exportImage('png').then((val) => {
                axios.post(backend+'recog', { img: val }).then((resp) => {
                    setDisplayLoadingAnim(false);
                    const { found, l, x, y, w, h, c } = resp.data;
                    if (!found) {
                        setNotFound(true);
                    } else {
                        setLoading(false);
                        setBb({ l, x, y, w, h, c });
                    }
                }).catch(()=>{
                    setDisplayLoadingAnim(false);
                    setNotFound(true);
                });
            })
        }
    }
    const notFoundClick = () => {
        canvasRef.current?.clearCanvas();
        setNotFound(false);
        setLoading(false);
    }
    return (
        <StyledYoloRecog>
            <DrawResult>
                <ReactSketchCanvas strokeColor="black" ref={canvasRef} className="sketch-canvas"></ReactSketchCanvas>
                {bb != null && drawFound(bb)}
                <Result className={loading ? "visible" : "hidden"}>
                    <Loader src={loadingAnim} className={displayLoadingAnim ? "loader visible" : "loader hidden"} />
                    <NotFound className={notFound ? "visible" : "hidden"}>
                        <span>Nem tudtam felismerni a betűt</span>
                        <button onClick={notFoundClick}>ok</button>
                    </NotFound>
                </Result>
            </DrawResult>
            <ButtonContainer>
                <YoloButton onClick={erease}>Töröl</YoloButton>
                <YoloButton onClick={send}>Küldés</YoloButton>
            </ButtonContainer>
        </StyledYoloRecog>


    );
}