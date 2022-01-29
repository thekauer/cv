import * as S from "./Retro.atoms";
import Image from "next/image";
import { RetroDemo } from "./RetroDemo/RetroDemo";
import { TestingAnim } from "./TestingAnim/TestingAnim";
import { RedisLogo } from "./RedisLogo/RedisLogo";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Retro = () => {
  return (
    <S.Container>
      <S.Header>
        {" "}
        <h1>Power Retro</h1>
      </S.Header>
      <S.RetroSection>
        <S.Row>
          <S.TextBox>
            <h2>Retrospektív alkalmazás</h2>
            <p>
              A <a href="https://powerretro.io/">power retro</a> egy
              retrospektív alkalmazás. Segítségével nincs szükség külön
              szoftverre a a retrospektívekhez, hanem rögtön a JIRA-ból nyílik
              erre lehetőségunk.
            </p>
          </S.TextBox>
          <RetroDemo />
        </S.Row>
      </S.RetroSection>
      <S.Frontend>
        <S.Row>
          <S.TextBox>
            <h2>Frontend</h2>
            <p>
              A frontend reactel és reduxal készült. Az egyik kiemelkedőbb
              feladatom a drag and drop teljes refactorálása és új funkciókkal
              való kiegészítése volt. Aminekén terveztem meg a logikáját, majd
              csapatban implementáltuk. Az implementáció 1 hónapon át tartott
              ami közben számos kihívással kellet szembenézznük ugyan is olyan
              feature-öket is írnunk kellet amit a react-beautiful-dnd nem
              támogatott.
            </p>
            <br />
            <p>
              Egyéb kiemelkedő feladatom a real time board template váltás, az
              uncategorized oszlop, és a lobby animáció volt.
            </p>
          </S.TextBox>
          <S.Row>
            <Fade triggerOnce>
              <S.SpinContainer>
                <Image src="/static/react.svg" width={200} height={200} />
              </S.SpinContainer>
            </Fade>
            <Fade triggerOnce>
              <Image src="/static/redux.svg" width={140} height={140} />
            </Fade>
          </S.Row>
        </S.Row>
      </S.Frontend>
      <S.Test>
        <S.Row>
          <S.TextBox>
            <h2>Tesztelés</h2>
            <p>
              <S.CoverageText>
                <CountUp start={0} end={17} delay={0.5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                %
              </S.CoverageText>
              -al nőtt a test coverage, amíg a projekten voltam.
            </p>
            <br />
            <p>
              Nagyon fontosnak tartom a tesztelést, és éppen ezért amíg a
              projekten voltam végig a tesztelés mellet lobbyztam. Nem hiszek
              abban, hogy csak azért írjunk tesztet, hogy legyen. Viszont
              szükség van az üzleti logika letesztelésére, hogy még időben
              kiderüljenek az esetleges bugok.
            </p>
          </S.TextBox>
          <TestingAnim />
        </S.Row>
      </S.Test>
      <S.Backend>
        <h2>Backend</h2>
      </S.Backend>
      <S.Database>
        <h2>Adatbázis</h2>
        <RedisLogo />
      </S.Database>
    </S.Container>
  );
};
