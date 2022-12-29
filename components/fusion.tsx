import CountUp from "react-countup";
import { Slide, Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { ExperienceDescription } from "@components/ExperienceDescription";
import { FusionIcons } from "@utils/icons";
import { useTranslation } from "next-i18next";

const StyledFusion = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  & * {
    color: var(--active-font-color);
  }
`;
const FusionData = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10em 2em;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--blue);
  padding: 15em 2em;
  & em {
    font-size: 1.5em !important;
  }
`;

const Syntax = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: var(--blue);
  padding: 5em 2em;
`;
const CodeImg = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.5);
`;

const CleanSyntax = styled.div`
  max-width: 600px;
  margin-bottom: 2em;
  & h2 {
    margin-bottom: 0.5em;
  }
`;

const Data = styled.div`
  margin-bottom: 2em;
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  & img {
    max-height: 3em;
  }
  & span {
    font-size: 5em;
  }
`;
export default function Fusion() {
  const { t } = useTranslation("fusion");
  const xpprops = {
    link: "https://github.com/thekauer/fusion",
    icons: FusionIcons,
  };
  return (
    <>
      <StyledFusion>
        <Header>
          <h1>Fusion</h1>
          <em>{t("desc")}</em>
        </Header>
        <FusionData>
          <Slide direction="up" triggerOnce fraction={0.5}>
            <Data>
              <h2>{t("lines")}</h2>
              <CountUp end={3631} delay={0.5}></CountUp>
            </Data>
            <Data>
              <h2>{t("commits")}</h2>
              <CountUp end={402} delay={0.5}></CountUp>
            </Data>
            <Data>
              <h2>{t("builds")}</h2>
              <CountUp end={456} delay={0.5}></CountUp>
            </Data>
          </Slide>
        </FusionData>
        <Syntax>
          <Fade triggerOnce fraction={0.5}>
            <CleanSyntax>
              <h2>{t("syntax_title")}</h2>
              <em>{t("syntax")}</em>
            </CleanSyntax>
            <CodeImg src={"static/fscode.svg"} />
          </Fade>
        </Syntax>
        <ExperienceDescription {...xpprops}>
          <p>{t("long_desc1")}</p>
          <p>{t("long_desc2")}</p>
        </ExperienceDescription>
      </StyledFusion>
    </>
  );
}
