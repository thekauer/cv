;
import { Experience, Icon } from '../components/Experience';
import { appDesc, appName, cvDesc, cvName, fsDesc, fsName, phdDesc, phdName, tdkDesc, tdkName } from '../content';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Head from 'next/head';


const StyledResume = styled.article`
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
    background-color: var(--theme-mid);
    & h1 {
        font-size:5em;
        margin-bottom: 1em;
    }
    & h2 {
        font-size:3em;
    }
`
const Section = styled.section`
    margin:2em 0;
`
const School = styled(Section)`
    padding: 2em 1;
    & p {
        margin:1em 0;
    }
`
const Language = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center ;
    padding:2em 0;
    & p {
        font-size: 1.5em;
        margin-right: 1em;
    }
`
const Exp = styled(Section)`
 & section {
    margin:2em 0;
 }
`
const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`
const Img = styled.img`
    width: 2em;
    margin-right: 1em;
`

const Resume = () => {
    const FusionIcons = (
        <>
            <Icon src={"static/cpp.svg"} alt="c++ ikon" />
            <Icon src={"static/llvm.svg"} alt="llvm logo" />
            <Icon src={"static/travis.svg"} alt="travis CI logo" />
            <Icon src={"static/google.svg"} alt="Google (Test) logo" />
            <Icon src={"static/cmake.svg"} alt="Cmake logo" />
            <Icon src={"static/git.svg"} alt="Git logo" />
            <Icon src={"static/bash.svg"} alt="Bash (script) logo" />
        </>
    );
    const PhdIcons = (
        <>
            <Icon src={"static/matlab.png"} alt="Matlab logo" />
            <Icon src={"static/python.svg"} alt="Python logo" />
            <Icon src={"static/tf.svg"} alt="Tensorflow logo" />
            <Icon src={"static/torch.svg"} alt="Torch logo" />
            <Icon src={"static/rust.svg"} alt="Rust logo" />
        </>
    );
    const TdkIcons = (
        <Icon src={"static/matlab.png"} alt="Matlab logo" />
    );
    const PhoneAppIcons = (
        <>
            <Icon src={"static/cs.svg"} alt="C# logo" />
            <Icon src={"static/xamarin.svg"} alt="Xamarin logo" />
            <Icon src={"static/git.svg"} alt="Git logo" />
        </>
    );
    const WebsiteIcons = (
        <>
            <Icon src={"static/react.svg"} alt="React logo" />
            <Icon src={"static/ts.svg"} alt="Typescript logo" />
            <Icon src={"static/node.svg"} alt="Node logo" />
            <Icon src={"static/docker.svg"} alt="Docker logo" />
            <Icon src={"static/firebase.svg"} alt="Firebase logo" />
            <Icon src={"static/git.svg"} alt="Git logo" />
        </>
    )
    return (
        <>
            <Head>
                <title>Resmue - Kauer András</title>
            </Head>
            <StyledResume>
                <header>
                    <h1>Resume</h1>
                </header>
                <School>
                    <header><h2>Iskoláim</h2></header>
                    <Row>
                        <Fade triggerOnce><Img src={"static/school.svg"} alt="Iskola ikon" /></Fade>
                        <p>
                            <h3>Programtervező Informatikus</h3>
                            <span>Eötvös Loránd Tudomány Egyetem</span>
                        </p>
                    </Row>
                    <Row>
                        <Fade triggerOnce><Img src={"static/school.svg"} alt="Iskola ikon" /></Fade>
                        <p>
                            <h3>Két tanítási nyelvű informatika</h3>
                            <span>Székesfehérvári SZC Széchenyi István Műszaki Szakgimnázium</span>
                        </p>
                    </Row>
                </School>
                <Section>
                    <header><h2>Nyelvtudás</h2></header>
                    <Language>
                        <Fade triggerOnce><Img src={"static/lang.svg"} alt="Nyelv ikon" /></Fade>
                        <p>Angol</p>
                        <p>C1</p>
                    </Language>
                </Section>
                <Exp>
                    <header><h2>Tapasztalat</h2></header>
                    <Experience title={fsName} desc={fsDesc} icons={FusionIcons} path="fusion" />
                    <Experience title={phdName} desc={phdDesc} icons={PhdIcons} path="phd" />
                    <Experience title={cvName} desc={cvDesc} icons={WebsiteIcons} path="" />
                    <Experience title={appName} desc={appDesc} icons={PhoneAppIcons} path="androidapp" />
                    <Experience title={tdkName} desc={tdkDesc} icons={TdkIcons} path="" />
                </Exp>
            </StyledResume>
        </>
    );
}

export default Resume;