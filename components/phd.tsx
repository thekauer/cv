import CountUp from "react-countup";
import Image from "next/image";
import { Arrow } from "./Arrow";
import { Gear } from "./Gear";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
const YoloRecog = dynamic(
  () =>
    (import("@components/YoloRecog") as any).then((mod: any) => mod.YoloRecog),
  { ssr: false }
);
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Head from "next/head";
import { ExperienceDescription } from "./ExperienceDescription";
import { PhdIcons } from "@utils/icons";
import StyledPhd from "./phd/StyledPhd";
import PhdImage from "./phd/PhdImage";
import Header from "./phd/Header";
import Text from "./phd/Text";
import Video from "./phd/Video";
import Process from "./phd/Process";
import { Box, GearBox } from "./phd/Box";
import { Grid, Recog, DrawContainer, YoloCpu, Line } from "./phd/Grid";
import { useTranslation } from "next-i18next";

const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Phd() {
  const { t } = useTranslation("phd");
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
  };
  const xpprops = {
    link: "https://gist.github.com/thekauer/055a7ba092c811449b1c0b521eaf1024",
    icons: PhdIcons,
  };
  return (
    <>
      <Head>
        <title>{t("head_title")}</title>
      </Head>
      <StyledPhd>
        <Header>
          <Text>
            <h1>Phd</h1>
            <em>{t("desc")}</em>
          </Text>
          <Fade triggerOnce>
            <PhdImage>
              <Image src="/static/phd.png" width={310} height={400} priority />
            </PhdImage>
          </Fade>
        </Header>
        <Video>
          <Text>
            <h2>{t("cnn_title")}</h2>
            <em>{t("cnn")}</em>
          </Text>
          <Fade triggerOnce>
            <video
              width="496"
              height="273"
              controls
              preload="none"
              poster="/static/matlab_thumb.png"
            >
              <source src="static/cnn.mp4" type="video/mp4" />
            </video>
          </Fade>
        </Video>
        <Process>
          <Grid>
            <Box id="box1">
              <h2>{t("documents")}</h2>
              {drawCountUp(388)}
              <h2>{t("letters")}</h2>
              {drawCountUp(78000)}
              <h2>{t("augmentation")}</h2>
              {drawCountUp(156000)}
            </Box>
            <Arrow id="arrow1" />
            <GearBox id="box2">
              <Gear customClass="blue-gear gear" />
              <Gear customClass="yellow-gear gear" />
              <Gear customClass="gray-gear gear" />
              <h2>{t("python_processing")}</h2>
            </GearBox>
            <Arrow id="arrow2" />
            <Box id="box3">
              <Line>
                <img src={"/static/lines.svg"} />
                <div>
                  {drawCountUp(70000)}
                  <h2>{t("lines_of_sherlock")}</h2>
                </div>
              </Line>
              <Line>
                <img src={"/static/gan.svg"} />
                <div>
                  {drawCountUp(78 * 500)}
                  <h2>{t("gan_letters")}</h2>
                </div>
              </Line>
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
              <Image
                src={"/static/yolocpu.svg"}
                width={500}
                height={500}
                priority
              />
            </Fade>
          </YoloCpu>
        </Recog>
        <DescriptionSection>
          <ExperienceDescription {...xpprops}>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>
              {t("p3")}
              <a href="https://github.com/thekauer/rustycrop" target="_blank">
                {t("prototype")}
              </a>
              {t("p4")}
            </p>
            <p>{t("p5")}</p>
            <p>{t("p6")}</p>
            <figure>
              <Fade triggerOnce delay={100}>
                <Image src="/static/cnn_result.png" width={550} height={286} />
              </Fade>
              <figcaption>{t("cnn_caption")}</figcaption>
            </figure>
            <p>{t("p7")}</p>
            <p>{t("p8")}</p>
            <p>{t("p9")}</p>
            <figure>
              <Fade triggerOnce delay={100}>
                <Image
                  src="/static/sherlock_input.jpg"
                  width={552}
                  height={552}
                />
              </Fade>
              <figcaption>{t("sherlock_input")}</figcaption>
            </figure>
            <p>{t("p10")}</p>
            <figure>
              <Fade triggerOnce delay={100}>
                <Image src="/static/coolest_bug.png" width={416} height={416} />
              </Fade>
              <figcaption>{t("bug_caption")}</figcaption>
            </figure>
            <p>{t("p11")}</p>
            <figure>
              <Row>
                {[
                  "/static/GAN_A.png",
                  "/static/GAN_Q.png",
                  "/static/GAN_P.png",
                ].map((path, idx) => (
                  <>
                    <Fade triggerOnce delay={(idx + 1) * 100} key={idx}>
                      <Image src={path} width={28} height={28} />
                    </Fade>
                  </>
                ))}
              </Row>
              <figcaption>{t("gan_caption")}</figcaption>
            </figure>
          </ExperienceDescription>
        </DescriptionSection>
      </StyledPhd>
    </>
  );
}
