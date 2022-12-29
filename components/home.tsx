import { Skill } from "./Skill";
import React from "react";
import PortfolioCard from "./PortfolioCard";
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
import { WorkCard } from "./WorkCard/WorkCard";
import { Fit4allIcons, RetroIcons, UstreamIcons } from "../utils/icons";
import { useTranslation } from "next-i18next";

const StyledHome = styled.article`
  padding: 1.5em 0;
  & svg path#bottom {
    fill: var(--theme-mid);
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Skills = styled.section`
  margin: 5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-bottom: 3em;
  }
`;
const Portfolio = styled.section`
  background-color: var(--theme-mid);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  & svg path#bottom {
    fill: var(--theme-dark);
  }
  gap: 2rem;
`;
const Header = styled.header`
  padding: 10em 2em;
  display: grid;
  place-items: center;
  & h1 {
    font-size: 5em;
    color: var(--font-color);
  }

  & h2 span {
    background: linear-gradient(to bottom right, #fc00ff 20%, #00dbde);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
  }
`;
const Svg = styled.svg<any>`
  height: 10em;
  width: 100%;
  transform: rotate(${(props) => props.top && "180"}deg);
`;
const Home = () => {
  const { t } = useTranslation("home");
  return (
    <StyledHome>
      <Header>
        <Fade triggerOnce>
          <h1>{t("name")}</h1>
        </Fade>
        <Fade triggerOnce delay={300}>
          <h2>
            <span>Full Stack</span> {t("developer")}
          </h2>
        </Fade>
      </Header>
      <Portfolio>
        <Svg viewBox="0 0 100 100" preserveAspectRatio="none" top>
          <path d="m 0,100 h 100 l 0,-90z" id="bottom" />
        </Svg>
        <WorkCard
          logo="/static/power_retro_logo.svg"
          icons={RetroIcons}
          path="retro"
          title="Power Retro"
          from="#00c853"
          to="#39b3fc"
        />
        <WorkCard
          logo="/static/fit4all.svg"
          icons={Fit4allIcons}
          path="fit4all"
          title="Fit4all"
          from="#0cb3b9"
          to="#3e448b"
        />
        <WorkCard
          logo="/static/ibmvs_sm.png"
          icons={UstreamIcons}
          path="ibm"
          title="IBM Video Streaming"
          from="#40b1e6"
          to="#3f3f3f"
        />
        <Svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="m 0,100 h 100 l 0,-90z" id="bottom" />
        </Svg>
      </Portfolio>

      <Skills>
        <header>
          <h2>{t("references")}</h2>
        </header>
        <SkillContainer>
          <PortfolioCard
            title={"fsName"}
            desc={"fsDesc"}
            color="var(--blue)"
            icon=""
            path="/fusion"
          />
          <PortfolioCard
            title={"phdName"}
            desc={"phdDesc"}
            color="var(--yellow)"
            icon=""
            path="/phd"
          />
          {/* <PortfolioCard
            title={cvName}
            desc={cvDesc}
            color="var(--react)"
            icon=""
            path="/website"
          /> */}
          <PortfolioCard
            title={"appName"}
            desc={"appDesc"}
            color="var(--green)"
            icon=""
            path="/androidapp"
          />
        </SkillContainer>
      </Skills>
    </StyledHome>
  );
};

export default Home;
