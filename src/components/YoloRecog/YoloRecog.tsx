import '../../index.css';
import './YoloRecog.css';
import { ReactSketchCanvas } from "react-sketch-canvas";
import loadingAnim from './static/loading.svg'
import { useRef, useState } from 'react';
import axios from 'axios';
const backend = process.env.REACT_APP_BACKEND;
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
                <div style={{ position: "absolute", top: y - 16 + "px", left: x, backgroundColor: "var(--yelow)", color: 'var(--active-font-color)' }} onClick={bbClick}>{`${l} ${c}%`}</div>
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
                    //canvasRef.current?.clearCanvas();
                    setDisplayLoadingAnim(false);
                    const { found, l, x, y, w, h, c } = resp.data;
                    if (!found) {
                        setNotFound(true);
                    } else {
                        setLoading(false);
                        setBb({ l, x, y, w, h, c });
                    }
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
        <div className="yolorecog">
            <div className="draw-result">
                <ReactSketchCanvas strokeColor="black" ref={canvasRef} className="sketch-canvas"></ReactSketchCanvas>
                {bb != null && drawFound(bb)}
                <div className={loading ? "result visible" : "result hidden"}>
                    <img src={loadingAnim} className={displayLoadingAnim ? "loader visible" : "loader hidden"} />
                    <div className={notFound ? "notfound visible" : "notfound hidden"}>
                        <span>Nem tudtam felismerni a betűt</span>
                        <button onClick={notFoundClick}>ok</button>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button onClick={erease}>Töröl</button>
                <button onClick={send}>Küldés</button>
            </div>
        </div>


    );
}