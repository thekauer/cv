import CountUp from 'react-countup';
import '../../index.css';
import { Arrow } from './Arrow';
import './Phd.css';
import cnnVideo from './static/cnn.mp4';
import phdImg from './static/phd.png';
import { Gear } from './Gear';
import VisibilitySensor from 'react-visibility-sensor';
import { ReactSketchCanvas } from "react-sketch-canvas";
import gan from './static/gan.svg';
import lines from './static/lines.svg';
import loadingAnim from './static/loading.svg';
import yolocpu from './static/yolocpu.svg';
import { useRef, useState } from 'react';
import axios from 'axios';
import { YoloRecog } from './YoloRecog';
import { Helmet } from 'react-helmet';

interface RecogType {
    l: string, x: number, y: number, w: number, h: number, c: number;
}
export const Phd = () => {
    const drawCountUp = (end: number) => {
        return (
            <CountUp end={end} duration={1}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
        );
    }
    const canvasRef = useRef<ReactSketchCanvas>(null);
    const erease = () => {
        if (canvasRef.current) {
            canvasRef.current.resetCanvas();
        }
    }
    const drawFound = (args : RecogType) => {
        const {l,x,y,w,h,c} = args;
        return (
            <>
            <div style={{position:"absolute",top:y+"px",left:x+"px",width:w+"px",height:h+"px",border:"4px solid var(--yellow)",backgroundColor:'transparent'}}/>
            <div style={{position:"absolute",top:y-16+"px",left:x,backgroundColor:"var(--yellow)",color:'var(--active-font-color)'}}>{`${l} ${c}`}</div>
            </>
        );
    }
    const [loading,setLoading] = useState(false);
    const [displayLoadingAnim,setDisplayLoadingAnim] = useState(false);
    const [notFound,setNotFound] = useState(false);
    const [bb,setBb] = useState<RecogType|null>(null);
    const send = () => {
        if (canvasRef.current) {
            setLoading(true);
            setDisplayLoadingAnim(true);
            canvasRef.current.exportImage('png').then((val) => {
                axios.post('http://localhost:3001/recog', { img: val }).then((resp) => {
                    //canvasRef.current?.clearCanvas();
                    setDisplayLoadingAnim(false);
                    const { found, l, x, y, w, h, c } = resp.data;
                    if (!found) {
                        setNotFound(true);
                    } else {
                        setLoading(false);
                        setBb({l,x,y,w,h,c});
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
        <>
        <Helmet>
            <title>Phd - Kauer András</title>
        </Helmet>
        <article className="phd">
            <header>
                <div className="text">
                    <h1>Phd</h1>
                    <em>Társszerzője vagyok egy Phd-nek ami kézírás felismérés teknikákkal foglalkozik. Az én feladatom volt implementálni a papír tartalmát, illetve szerepet vállaltam a tervezésben is.</em>
                </div>
                <img src={phdImg}></img>
            </header>
            <section className="video1">
                <div className="text">
                    <h2>CNN felismerés</h2>
                    <em>Az első működő prototípusa a projektnek. Ez viszont nem tudja magától megtalálni a betűket. Éppen ezért az az ötletem támadt, hogy a YOLO technológiát kéne használnunk a jővőben, aminek egy demoja lentebb látható.</em>
                </div>

                <video width="640" controls>
                    <source src={cnnVideo} type="video/mp4" />
                </video>
            </section>
            <section className="process">
                <div className="route1">
                    <div className="box" id="box1">
                        <h2>Feldolgozott Dokumentumok</h2>
                        {drawCountUp(388)}
                        <h2>Begyűjtött betűk</h2>
                        {drawCountUp(78000)}
                        <h2>Augmentálással</h2>
                        {drawCountUp(156000)}
                    </div>
                        <Arrow id="arrow1" />
                        <div className="box gearbox" id="box2">
                            <Gear customClass="blue-gear gear" />
                            <Gear customClass="yellow-gear gear" />
                            <Gear customClass="gray-gear gear" />
                            <h2>Python feldolgozás</h2>
                        </div>
                        <Arrow id="arrow2"/>
                        <div className="box" id="box3">
                            <div className="line">
                                <img src={lines} />
                                <div>
                                    {drawCountUp(70000)}
                                    <h2>Sor Sherlock</h2>
                                </div>
                            </div>
                            <div className="line">
                                <img src={gan} />
                                <div>
                                    {drawCountUp(78 * 500)}
                                    <h2>GAN generált betű</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <section id="recog">
            <div className="draw-container">
               <YoloRecog/>
               </div>
                <Arrow deg={180} id="arrow4" />
                    <Arrow deg={90} id="arrow3"/>
                    <img src={yolocpu} width="500px" id="yolocpu" />
            </section>
        </article>
        </>
    );
}