import '../../index.css';
import './Resume.css';
import { Experience, Icon } from '../../components/Experience/Experience';
import cppIcon from './images/cpp.svg';
import llvmIcon from './images/llvm.svg'
import travisIcon from './images/travis.svg'
import googleIcon from './images/google.svg'
import cmakeIcon from './images/cmake.svg'
import gitIcon from './images/git.svg'
import bashIcon from './images/bash.svg'
import matlabIcon from './images/matlab.png'
import pythonIcon from './images/python.svg'
import tfIcon from './images/tf.svg'
import torchIcon from './images/torch.svg'
import rustIcon from './images/rust.svg'
import csIcon from './images/cs.svg'
import xamarinIcon from './images/xamarin.svg'
import reactIcon from './images/react.svg'
import tsIcon from './images/ts.svg'
import nodeIcon from './images/node.svg'
import dockerIcon from './images/docker.svg'
import firebaseIcon from './images/firebase.svg'
import langIcon from './images/lang.svg'
import schoolIcon from './images/school.svg'
import { appDesc, appName, cvDesc, cvName, fsDesc, fsName, phdDesc, phdName, tdkDesc, tdkName } from '../../content';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';

const Resume = () => {
    const FusionIcons = (
        <>
            <Icon src={cppIcon} alt="c++ ikon" />
            <Icon src={llvmIcon} alt="llvm logo" />
            <Icon src={travisIcon} alt="travis CI logo" />
            <Icon src={googleIcon} alt="Google (Test) logo" />
            <Icon src={cmakeIcon} alt="Cmake logo" />
            <Icon src={gitIcon} alt="Git logo" />
            <Icon src={bashIcon} alt="Bash (script) logo" />
        </>
    );
    const PhdIcons = (
        <>
            <Icon src={matlabIcon} alt="Matlab logo" />
            <Icon src={pythonIcon} alt="Python logo" />
            <Icon src={tfIcon} alt="Tensorflow logo" />
            <Icon src={torchIcon} alt="Torch logo" />
            <Icon src={rustIcon} alt="Rust logo" />
        </>
    );
    const TdkIcons = (
        <Icon src={matlabIcon} alt="Matlab logo" />
    );
    const PhoneAppIcons = (
        <>
            <Icon src={csIcon} alt="C# logo" />
            <Icon src={xamarinIcon} alt="Xamarin logo" />
            <Icon src={gitIcon} alt="Git logo" />
        </>
    );
    const WebsiteIcons = (
        <>
            <Icon src={reactIcon} alt="React logo" />
            <Icon src={tsIcon} alt="Typescript logo" />
            <Icon src={nodeIcon} alt="Node logo" />
            <Icon src={dockerIcon} alt="Docker logo" />
            <Icon src={firebaseIcon} alt="Firebase logo" />
            <Icon src={gitIcon} alt="Git logo" />
        </>
    )
    return (
        <>
            <Helmet>
                <title>Resmue - Kauer András</title>
            </Helmet>
            <article className="resume">
                <header>
                    <h1>Resume</h1>
                </header>
                <section className="school">
                    <header><h2>Iskoláim</h2></header>
                    <div className="row">
                        <Fade triggerOnce><img src={schoolIcon} alt="Iskola ikon" /></Fade>
                        <p>
                            <h3>Programtervező Informatikus</h3>
                            <span>Eötvös Loránd Tudomány Egyetem</span>
                        </p>
                    </div>
                    <div className="row">
                        <Fade triggerOnce><img src={schoolIcon} alt="Iskola ikon" /></Fade>
                        <p>
                            <h3>Két tanítási nyelvű informatika</h3>
                            <span>Székesfehérvári SZC Széchenyi István Műszaki Szakgimnázium</span>
                        </p>
                    </div>
                </section>
                <section>
                    <header><h2>Nyelvtudás</h2></header>
                    <div className="language">
                        <Fade triggerOnce><img src={langIcon} alt="Nyelv ikon" /></Fade>
                        <p>Angol</p>
                        <p>C1</p>
                    </div>
                </section>
                <section className="exp">
                    <header><h2>Tapasztalat</h2></header>
                    <Experience title={fsName} desc={fsDesc} icons={FusionIcons} path="fusion" />
                    <Experience title={phdName} desc={phdDesc} icons={PhdIcons} path="phd" />
                    <Experience title={cvName} desc={cvDesc} icons={WebsiteIcons} path="" />
                    <Experience title={appName} desc={appDesc} icons={PhoneAppIcons} path="androidapp" />
                    <Experience title={tdkName} desc={tdkDesc} icons={TdkIcons} path="" />
                </section>
            </article>
        </>
    );
}

export default Resume;