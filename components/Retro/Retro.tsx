import * as S from "./Retro.atoms";
import Image from "next/image";
import { RetroDemo } from "./RetroDemo/RetroDemo";
import { TestingAnim } from "./TestingAnim/TestingAnim";
import { RedisLogo } from "./RedisLogo/RedisLogo";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "next-i18next";

export const Retro = () => {
  const { t } = useTranslation("retro");
  const Counter = ({ end }: { end: number }) => (
    <S.CoverageText>
      <CountUp start={0} end={end} delay={0.5}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      %
    </S.CoverageText>
  );
  return (
    <S.Container>
      <S.Header>
        <h1>Power Retro</h1>
      </S.Header>
      <S.RetroSection>
        <S.Row>
          <S.TextBox>
            <h2>{t("retro_title")}</h2>
            <p>
              <a href="https://powerretro.io/">Power Retro</a> {t("retro_desc")}
            </p>
          </S.TextBox>
          <RetroDemo />
        </S.Row>
      </S.RetroSection>
      <S.Frontend>
        <S.Row>
          <S.TextBox>
            <h2>Frontend</h2>
            <p>{t("frontend")}</p>
            <br />
            <p>{t("frontend2")}</p>
          </S.TextBox>
          <S.Row>
            <Fade triggerOnce>
              <S.SpinContainer>
                <Image src="/static/react.svg" width={150} height={150} />
              </S.SpinContainer>
            </Fade>
            <Fade triggerOnce>
              <Image src="/static/redux.svg" width={100} height={100} />
            </Fade>
          </S.Row>
        </S.Row>
      </S.Frontend>
      <S.Test>
        <S.Row>
          <S.TextBox>
            <h2>{t("testing_title")}</h2>
            <p>
              {t("testing_0")}
              <Counter end={17} />
              {t("testing_1")}
            </p>
            <br />
            <p>{t("testing_2")}</p>
          </S.TextBox>
          <TestingAnim />
        </S.Row>
      </S.Test>
      <S.Database>
        <S.Row>
          <S.TextBox>
            <h2>{t("db_title")}</h2>
            <p>
              {t("db")}
              <Counter end={18076} />
              {t("db2")}
            </p>
          </S.TextBox>
          <S.Row>
            <RedisLogo />
            <Fade triggerOnce>
              <Image src="/static/mysql.svg" width={130} height={130} />
            </Fade>
          </S.Row>
        </S.Row>
      </S.Database>
    </S.Container>
  );
};
