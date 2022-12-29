import { Experience } from "./Experience";
import {
  appDesc,
  appName,
  cvDesc,
  cvName,
  fsDesc,
  fsName,
  phdDesc,
  phdName,
  tdkDesc,
  tdkName,
} from "@utils/content";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Head from "next/head";
import {
  FusionIcons,
  PhdIcons,
  TdkIcons,
  PhoneAppIcons,
  WebsiteIcons,
  RetroIcons,
  Fit4allIcons,
  UstreamIcons,
} from "@utils/icons";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const StyledResume = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  background-color: var(--theme-mid);
  & h1 {
    font-size: 5em;
    margin-bottom: 1em;
  }
  & h2 {
    font-size: 3em;
  }
`;
const Section = styled.section`
  margin: 2em 0;
`;
const School = styled(Section)`
  padding: 2em 1;
  & section {
    margin: 1em 0;
  }
`;
const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em 0;
  & p {
    font-size: 1.5em;
    margin-right: 1em;
  }
`;
const Exp = styled(Section)`
  & section {
    margin: 2em 0;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Img = styled.div`
  margin-right: 1em;
`;

const Tile = styled.div`
  margin-top: 1rem;
  border-radius: 25px;
  padding: 2rem;
  background-color: var(--theme-dark);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Resume = () => {
  const { t } = useTranslation("resume");
  return (
    <>
      <Head>
        <title>{t("head")}</title>
      </Head>
      <StyledResume>
        <header>
          <h1>{t("title")}</h1>
        </header>
        <Exp>
          <header>
            <h2>{t("my_work")}</h2>
          </header>
          <Tile>
            <header>
              <h3>IBM Watson Media</h3>
            </header>
            <Experience
              title={"IBM Video Streaming"}
              desc={t("ibmDesc")}
              icons={UstreamIcons}
              path="ibm"
            />
          </Tile>
          <Tile>
            <header>
              <h3>Tappcoding</h3>
            </header>
            <Experience
              title={"Power Retro"}
              desc={t("retroDesc")}
              icons={RetroIcons}
              path="retro"
            />
            <Experience
              title={"Fit4all"}
              desc={t("f4aDesc")}
              icons={Fit4allIcons}
              path="fit4all"
            />
          </Tile>
        </Exp>
        <Exp>
          <header>
            <h2>{t("references")}</h2>
          </header>
          <Experience
            title="fsName"
            desc="fsDesc"
            icons={FusionIcons}
            path="fusion"
          />
          <Experience
            title="phdName"
            desc="phdDesc"
            icons={PhdIcons}
            path="phd"
          />
          {/* <Experience
            title={cvName}
            desc={cvDesc}
            icons={WebsiteIcons}
            path="website"
          /> */}
          <Experience
            title="appName"
            desc="appDesc"
            icons={PhoneAppIcons}
            path="androidapp"
          />
        </Exp>
        <School>
          <header>
            <h2>{t("education")}</h2>
          </header>
          <Row>
            <Fade triggerOnce delay={100}>
              <Img>
                <Image
                  className="img"
                  src={"/static/school.svg"}
                  alt="Iskola ikon"
                  layout="fixed"
                  width={32}
                  height={32}
                />
              </Img>
            </Fade>
            <section>
              <h3>{t("pti")}</h3>
              <span>{t("elte")}</span>
            </section>
          </Row>
          <Row>
            <Fade triggerOnce delay={200}>
              <Img>
                <Image
                  src={"/static/school.svg"}
                  alt="Iskola ikon"
                  layout="fixed"
                  width={32}
                  height={32}
                />
              </Img>
            </Fade>
            <section>
              <h3>{t("bilingual_it")}</h3>
              <span>{t("szechenyi")}</span>
            </section>
          </Row>
        </School>
        <Section>
          <header>
            <h2>{t("langs")}</h2>
          </header>
          <Language>
            <Fade triggerOnce delay={300}>
              <Img>
                <Image
                  src={"/static/lang.svg"}
                  alt="Nyelv ikon"
                  layout="fixed"
                  width={32}
                  height={32}
                />
              </Img>
            </Fade>
            <p>{t("en")}</p>
            <p>C1</p>
          </Language>
        </Section>
      </StyledResume>
    </>
  );
};

export default Resume;