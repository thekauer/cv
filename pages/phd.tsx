import CountUp from 'react-countup';
import Image from 'next/image'
import { Arrow } from '../components/Arrow';
import { Gear } from '../components/Gear';
import VisibilitySensor from 'react-visibility-sensor';
import dynamic from 'next/dynamic';
const YoloRecog = dynamic(()=>(import('@components/YoloRecog')as any).then((mod:any)=>mod.YoloRecog),{ssr:false});
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Head from 'next/head';
import { ExperienceDescription } from '../components/ExperienceDescription';
import { PhdIcons } from '@utils/icons';
import StyledPhd from '../components/phd/StyledPhd';
import PhdImage from '../components/phd/PhdImage';
import Header from '../components/phd/Header';
import Text from '../components/phd/Text';
import Video from '../components/phd/Video';
import Process from '../components/phd/Process';
import {Box,GearBox} from '../components/phd/Box';
import {Grid,Recog,DrawContainer,YoloCpu,Line} from '../components/phd/Grid';


const DescriptionSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Row = styled.div`
    display:flex;
    flex-direction:row;
`

export default function Phd()  {
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
    const xpprops = {
        link:"https://gist.github.com/thekauer/055a7ba092c811449b1c0b521eaf1024",
        icons:PhdIcons
    }
    return (
        <>
            <Head>
                <title>Phd - Kauer András</title>
            </Head>
            <StyledPhd>
                <Header>
                    <Text>
                        <h1>Phd</h1>
                        <em>Társszerzője vagyok egy Phd-nek ami kézírás felismerés technikákkal foglalkozik. Az én feladatom volt implementálni a papír tartalmát, illetve szerepet vállaltam a tervezésben is.</em>
                    </Text>
                    <Fade triggerOnce><PhdImage><Image src="/static/phd.png" width={310} height={400} priority/></PhdImage></Fade>
                </Header>
                <Video>
                    <Text>
                        <h2>CNN felismerés</h2>
                        <em>Az első működő prototípusa a projektnek. Ez viszont nem tudja magától megtalálni a betűket. Éppen ezért az az ötletem támadt, hogy a YOLO technológiát kéne használnunk a jövőben, aminek egy demoja lentebb látható.</em>
                    </Text>
                    <Fade triggerOnce>
                        <video width="496" height="273" controls preload="none" poster='/static/matlab_thumb.png'>
                            <source src="static/cnn.mp4" type="video/mp4" />
                        </video>
                    </Fade>
                </Video>
                <Process>
                    <Grid>
                    <Box id="box1">
                        <h2>Feldolgozott Dokumentumok</h2>
                        {drawCountUp(388)}
                        <h2>Begyűjtött betűk</h2>
                        {drawCountUp(78000)}
                        <h2>Augmentálással</h2>
                        {drawCountUp(156000)}
                    </Box>
                    <Arrow id="arrow1" />
                    <GearBox id="box2">
                        <Gear customClass="blue-gear gear" />
                        <Gear customClass="yellow-gear gear" />
                        <Gear customClass="gray-gear gear" />
                        <h2>Python feldolgozás</h2>
                    </GearBox>
                    <Arrow id="arrow2" />
                    <Box id="box3">
                        <Line><img src={"/static/lines.svg"} /><div>{drawCountUp(70000)}<h2>Sor Sherlock</h2></div></Line>
                        <Line><img src={"/static/gan.svg"} /><div>{drawCountUp(78 * 500)}<h2>GAN generált betű</h2></div></Line>
                    </Box>
                    </Grid>
                </Process>
                <Recog>
                    <DrawContainer>
                        <YoloRecog />
                    </DrawContainer>
                    <Arrow deg={180} id="arrow4" />
                    <Arrow deg={90} id="arrow3" />
                    <YoloCpu>
                        <Fade triggerOnce>
                            <Image src={"/static/yolocpu.svg"} width={500} height={500} priority/>
                        </Fade>
                    </YoloCpu>
                </Recog>
                <DescriptionSection>
                <ExperienceDescription {...xpprops}>
                    <p>Pár évvel ezelőtt az egyik tanárom felajánlott egy munkalehetőséget, amit én el is vállaltam. Éppen a Phd-jén dolgozott, amiben szeretett volna valamilyen módon betűfelismeréssel foglalkozni.</p>
                    <p>Ehhez nagyon sok betűre volt szüksége, amiket önkéntesekkel íratott, majd beszkennelt. Az én feladatom volt ezeket körbevágni egyesével majd átnézni és normalizálni. Legalább 1000 darabra volt szükség minden betűből, de végül inkább többet általában nagyjából 1500at gyűjtöttem.</p>
                    <p>Mivel elég monoton és lassú folyamat volt egyesével kivagdosni a betűket, óránként legjobb esetben olyan 800 darabot tudtam kivágni, már a harmadik betűnél "feladtam" és elhatároztam, hogy a szabadidőmben írni fogok egy programot ami felgyorsítja a folyamatot. Akkor nagyon tetszett a rust programozási nyelv ezért azt használtam. Elhatároztam, hogyha sikerül egy működő prototípust összehozni egy hétvége alatt akkor azt fogom használni. Végül a  <a href="https://github.com/thekauer/rustycrop" target="_blank">prototípus</a> olyan jó lett, bár nagyon messze volt a tökéletestől, hogy sose kellett tovább fejlesztenem. Az új programommal már akár 2000-2500 darab betűt is ki tudtam vágni egy óra alatt, de legrosszabb esetben is kétszer olyan gyors voltam, mint előtte. Pedig ekkor még csak nem is hallottam olyan algoritmusokról, mint például az MSER.</p>
                    <p>Ahogy gyűltek a betűk egyre többször fordult elő, hogy rendezni, alakítani kellet őket. Itt megtudtam mutatni a tudásom, nagyon gyorsan tudtam elkészíteni ezeket a scripteket, és ezért innentől kezdve az én feladatom lett a scriptek írása is. Ennek köszönhető például, hogy több formátumban is elérhető az adathalmaz, amit készítettünk.</p>
                    <p>A következő fázis a betűfelismerés volt. Ekkorra a projekt implementálását már teljes mértékben én végeztem. Először CNN-eket használtunk. Megtanultam, hogy hogyan kell neurális hálózattokat felépíteni és megprogramozni és több száz modellt készítettem, és teszteltem le a betűinken.</p>
                    <figure>
                    <Fade triggerOnce delay={100}>
                    <Image src="/static/cnn_result.png" width={550} height={286}/>
                    </Fade>
                    <figcaption>Az egyik CNN model</figcaption>
                    </figure>
                    <p>A CNN-nek viszont meg van az a hátránya, hogy csak fix méretű inputtal működik. Szóval, ha írott szöveget szeretnénk felismerni akkor nekünk kell megkeresni és különválasztani a betűket. Ami még angol kézírással egész kivitelezhető, ahogy a fenti videó is mutatja. De ha az ember kicsit össze-vissza ír és összeköti a betűket akkor már közel sem ilyen jók az eredmények.</p>
                    <p>Ekkor támadt az ötletem, hogy használjunk YOLO hálózatot. Ez egy olyan neurális háló, ami nem csak felismeri, hanem meg is találja, hogy hol helyezkedik el az adott betű. Megvizsgáltam gyakorlatilag minden lehetőségünket RCNN téren, beleértve a RCNN, Fast RCNN, Faster RCNN, SSD, Darknet ls Retinatet hálózattokat, és végül az Ultralitics-től Yolov5-öt választottam.</p>
                    <p>A yolohoz már olyan bemenet kellet, amin írott szöveg van nem csak egy-egy betű. Nem ált szándékunkban hosszú paragrafusokat íratni önkéntesekkel és ezeket címkézni betűnkként, ezért írtam egy python programot ami a Sherlock Holmos-t leírja a mi betűinkkel. Egy bemenet 14 sorból minden sorban egy szóból ált úgy rendezve, hogy minden hova kerüljön betű.</p>
                    <figure>
                        <Fade triggerOnce delay={100}>
                        <Image src="/static/sherlock_input.jpg" width={552} height={552}/>
                        </Fade>
                        <figcaption>A Sherlock Holmes-os bemenet</figcaption>
                    </figure>
                    <p>Ennek az implementációja közben írtam meg a kedvenc bugomat is. Amitől a bemenetnek csak a körvonala látszott.</p>
                    <figure>
                    <Fade triggerOnce delay={100}>
                        <Image src="/static/coolest_bug.png" width={416} height={416}/>
                        </Fade>
                        <figcaption>Bug a bemenetgenerálás kódjában</figcaption>
                    </figure>
                    <p>Ehhez viszont még több betűre volt szükségünk, úgyhogy egyrészt a már a CNN-eknél is alkalmazott augmentáláshoz fordultunk. Amiből írtam is egy TDK dolgozatot. Illetve az az ötletem támadt, hogy használhatnánk úgynevezett GAN modelleket, hogy mesterséges intelligenciával is tudjunk betűket generálni. Írtam erre is egy programot, és egy kis tökéletesítés után egész meggyőző betűket generált és végül minden betűből generáltam 500-at vele.</p>
                    <figure>
                        <Row>
                        {
                            ["/static/GAN_A.png","/static/GAN_Q.png","/static/GAN_P.png"].map( (path,idx) => (
                                <>
                                <Fade triggerOnce delay={(idx+1)*100} key={idx}>
                                    <Image src={path} width={28} height={28} />
                                </Fade>
                                </>
                            ) )
                        }
                        </Row>
                        <figcaption>GAN által generált betűk</figcaption>
                    </figure>
                </ExperienceDescription>
                </DescriptionSection>
            </StyledPhd>
        </>
    );
}