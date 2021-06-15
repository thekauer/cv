;
import { Experience } from '../components/Experience';
import { appDesc, appName, cvDesc, cvName, fsDesc, fsName, phdDesc, phdName, tdkDesc, tdkName } from '@utils/content';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Head from 'next/head';
import { FusionIcons, PhdIcons, TdkIcons, PhoneAppIcons, WebsiteIcons } from '@utils/icons';
import Image from 'next/image';

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
    & section {
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
const Img = styled.div`
    margin-right: 1em;
`

const Resume = () => {
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
                        <Fade triggerOnce delay={100}>
                            <Img><Image className="img" src={"/static/school.svg"} alt="Iskola ikon" layout="fixed" width={32} height={32} /></Img>
                        </Fade>
                        <section>
                            <h3>Programtervező Informatikus</h3>
                            <span>Eötvös Loránd Tudomány Egyetem</span>
                        </section>
                    </Row>
                    <Row>
                        <Fade triggerOnce delay={200}>
                            <Img><Image src={"/static/school.svg"} alt="Iskola ikon" layout="fixed" width={32} height={32} /></Img>
                        </Fade>
                        <section>
                            <h3>Két tanítási nyelvű informatika</h3>
                            <span>Székesfehérvári SZC Széchenyi István Műszaki Szakgimnázium</span>
                        </section>
                    </Row>
                </School>
                <Section>
                    <header><h2>Nyelvtudás</h2></header>
                    <Language>
                        <Fade triggerOnce delay={300}>
                            <Img><Image src={"/static/lang.svg"} alt="Nyelv ikon" layout="fixed" width={32} height={32} /></Img>
                        </Fade>
                        <p>Angol</p>
                        <p>C1</p>
                    </Language>
                </Section>
                <Exp>
                    <header><h2>Tapasztalat</h2></header>
                    <Experience title={fsName} desc={fsDesc} icons={FusionIcons} path="fusion" />
                    <Experience title={phdName} desc={phdDesc} icons={PhdIcons} path="phd" />
                    <Experience title={cvName} desc={cvDesc} icons={WebsiteIcons} path="website" />
                    <Experience title={appName} desc={appDesc} icons={PhoneAppIcons} path="androidapp" />
                </Exp>
            </StyledResume>
        </>
    );
}

export default Resume;