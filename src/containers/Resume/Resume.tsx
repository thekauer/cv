import '../../index.css';
import {Experience,Icon} from '../../components/Experience/Experience';
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
        <Icon src={cppIcon} alt="c++ ikon"/>
        <Icon src={llvmIcon} alt="llvm logo"/>
        <Icon src={travisIcon} alt="travis CI logo"/>
        <Icon src={googleIcon} alt="Google (Test) logo"/>
        <Icon src={cmakeIcon} alt="Cmake logo"/>
        <Icon src={gitIcon} alt="Git logo"/>
        <Icon src={bashIcon} alt="Bash (script) logo"/>
        </>
    );
    const PhdIcons = (
        <>
        <Icon src={matlabIcon} alt="Matlab logo"/>
        <Icon src={pythonIcon} alt="Python logo"/>
        <Icon src={tfIcon} alt="Tensorflow logo"/>
        <Icon src={torchIcon} alt="Torch logo"/>
        <Icon src={rustIcon} alt="Rust logo"/>
        </>
    );
    const TdkIcons = (
        <Icon src={matlabIcon} alt="Matlab logo"/>
    );
    return (
        <>
                <header>
                    <h1>Resmue</h1>
                </header>
                <a className="d" href="#iskolaim">Iskolaim</a><a className="d" href="#tapasztalatok">Tapasztalatok</a>
                <article>
                    <header>
                        <h2 id="#iskolaim">Iskoláim</h2>
                    </header>
                    <section>
                        <h3>Programtervező Informatikus</h3>
                        <span>Eötvös Loránd Tudomány Egyetem</span>
                    </section>
                    <section>
                        <h3>Két tanítási nyelvű informatika</h3>
                        <span>Székesfehérvári SZC Széchenyi István Műszaki Szakgimnázium</span>
                    </section>
                </article>
                <article>
                    <section>
                    <header>
                        <h2>Nyelvtudás</h2>
                    </header>
                    <table>
                        <caption>Nyelvtudás
                            <details>
                            <summary>Súgó</summary>
                            Az angol C1 a CEFR keretrendszer szerint értendő.
                        </details>
                    
                        </caption>
                        <tr><th>Nyelv</th><th>Szint</th></tr>
                        <tr>
                            <td>Angol</td>
                            <td>C1</td>
                        </tr>
                        <tr>
                            <td>Magyar</td>
                            <td>Anyanyelvi szinten</td>
                        </tr>
                    </table>
                </section>
                </article>



                <article>
                    <header>
                        <h2 id="tapasztalatok">Tapasztalat</h2>
                    </header>
                    <Experience title="Fusion" icons={FusionIcons}>
                        <p>A saját <strong>programozási nyelvem</strong>, ami már egy örökkévalóság óta készül. Megpróbáltam úgy elkészíteni ahogy azt egy valódi cégnél csinálnák. Ez persze azt jelentette, hogy olykor-olykor vissza kellett utasítanom egy-egy pull requestet mert nem ment át a code review-n. Ahhoz képest, hogy <strong>2 év</strong> munka van már benne mindössze nagyjából 7000 sor. Ezt könnyű lenne betudni a folyamatos fejlesztésnek és javításoknak, ami részben igaz is de azért a 12 órás pointer debbugolások is megdobják az időt.</p>
                        <br/>
                        <p>A <a href="https://github.com/thekauer/fusion">githubomon</a> megtalálod. Ha van linuxod akár tudsz rajta változtatni is.</p>
                    </Experience>
                    <Experience title="PhD" icons={PhdIcons}>
                    <p>Nyilván félrevezető a header. Nem az én Phd-m csak author vagyok, bár azt hozzá kell tenni, hogy az egészet <strong>én programoztam</strong>. Eddigi leghosszabb projektem, már <strong>3 éves</strong> és soha nem lesz vége. A projekthez <strong>Matlab</strong>-et használtunk eleinte, de hála istennek ez elérte a korlátjait amikor <strong>GAN</strong>, és <strong>RCNN</strong> hálózatokkal kezdtünk el foglalkozni. Akkor váltottunk <strong>Tensorflowra</strong> és <strong>PyTorchra</strong>. Ami alatt persze azt kell csak érteni, hogy az ezekben a framworkökben írt interaktív python notebookokat átírva csináltam kézírásfelismerést. Ami hát sajnos nincs a helyzet magaslatán, de mentségemre szóljon, hogy nem sokan csináltak ilyet.</p>
                            <br/>
                            <figure>
                            <video poster="pics/cnn_poster.png" controls>
                              <source src="pics/cnn_recog.mp4" type="video/mp4"/>
                            </video>
                            <figcaption>Itt egy kis ízelítő egy még nagyon korai verziójából<br/><a href="cnn.html">felirat</a></figcaption>
                            </figure>
                            <br/>
                            <p>Később az MSER + CNN kombóról <strong>YOLO</strong>-ra váltottam amihez a betűinkből kiraktam az első Sherlock Holmes könyv tartalmát. Sokkal jobbnak hangzik így mint amilyen a valóságban de SZÍNES!</p>
                            <figure>
                                <a href="pics/val.jpg"><img src="pics/labels.png" alt="A Sherlock Holmes-ból pár sor kirakva összegyűjtött betűkből és felcimkézve a mesterséges inteligánciának, hogy meg tudod tanulni"/></a>
                                <figcaption>Azért nézz ki ilyen jól mert ez csak a bemenete a hálózatnak</figcaption>
                            </figure>
                            <br/>
                            <p>A <a href="yolo.ipynb">kód</a> egy részletét felraktam azért ide.</p>
                            <p>Több papír is született belőle a Phd részét ebben <a href="http://acta.uni-obuda.hu/EdibogluBartos_Hoscan_Kauer_Hajnal_106.pdf">pdf-ben</a> tudod elolvasni.</p>
                    </Experience>
                    <Experience title="Tdk" icons={TdkIcons}>
                        <p>Ahogy készült a Phd úgy éppen az <strong>Augmentálás</strong> résznél jártam amikor lehetőséget kaptam, hogy részt vegyek az Óbudai egyetem Tdk-ján. <strong>Két</strong> nappal a leadási határidő elött jelentkeztem be. Így kicsit össze lett csapva ez a 20 oldalas írás. Ironikus módon a témája szánalmasan egyszerű, sokkal érdekesebb, hogy hogy választottam ki a teszteléshez a <strong>CNN modellt</strong> de nekem úgy tűnt hogy ez amikor a bemutatót tartottam senkinek nem esett le.</p>
                        <br/>
                        <p>De ha valakit érdekel a <a href="tdk.pdf">TDK-m</a>, annak felraktam.</p>
                    </Experience>
                </article>


                </>
    );
}

export default Resume;