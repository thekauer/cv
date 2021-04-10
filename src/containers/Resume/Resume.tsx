import '../../index.css';
import './Resume.css';
import { Experience, Icon } from '../../components/Experience/Experience';
import cppIcon from './images/cpp.png';
import llvmIcon from './images/llvm.png'
import travisIcon from './images/travis.png'
import googleIcon from './images/google.png'
import cmakeIcon from './images/cmake.png'
import gitIcon from './images/git.png'
import bashIcon from './images/bash.png'
import matlabIcon from './images/matlab.png'
import pythonIcon from './images/python.png'
import tfIcon from './images/tf.png'
import torchIcon from './images/torch.png'
import rustIcon from './images/rust.png'

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
    return (
        <>
            <article className="resume">
                <header>
                    <h1>Resume</h1>
                </header>
                    <section>
                        <div className="school">
                            <div className="text">
                                <header><h2>Iskoláim</h2></header>
                                <p>
                                    <h3>Programtervező Informatikus</h3>
                                    <span>Eötvös Loránd Tudomány Egyetem</span>
                                </p>
                                <p>
                                    <h3>Két tanítási nyelvű informatika</h3>
                                    <span>Székesfehérvári SZC Széchenyi István Műszaki Szakgimnázium</span>
                                </p>
                            </div>
                        </div>
                    </section>
                <section>
                    <header><h2>Tapasztalat</h2></header>
                    <Experience title="Programozási nyelv" desc="llvm alapú, fordított, általános célú programozási nyelv" icons={FusionIcons} path="fusion"/>
                    <Experience title="Phd" desc="Több nyelven kézírásfelismerés módszerek mesterséges inteligenciával" icons={PhdIcons} path="phd"/>
                    <Experience title="Weboldal" desc="React alapú modern személyes weboldal" icons={"asd"} path=""/>
                    <Experience title="Android Alkalmazás" desc="Native android alkalmazás, helymeghatározással és adatbázissal" icons={"asd"} path=""/>
                    <Experience title="Tdk" desc="Adat augmentálási technikák kézirásfelsimeréshez" icons={"asd"} path=""/>
                </section>
            </article>
        </>
    );
}

export default Resume;