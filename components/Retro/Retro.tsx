import * as S from "./Retro.atoms";
import Image from "next/image";
import { RetroDemo } from "./RetroDemo/RetroDemo";
import { TestingAnim } from "./TestingAnim/TestingAnim";
import { RedisLogo } from "./RedisLogo/RedisLogo";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Retro = () => {
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
            <h2>Retrospektív alkalmazás</h2>
            <p>
              A <a href="https://powerretro.io/">Power Retro</a> egy
              retrospektív alkalmazás. Segítségével nincs szükség külön
              szoftverre a retrospektívekhez, hanem rögtön a JIRA-ból nyílik
              erre lehetőségünk.
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
              A frontend Reactel és Reduxal készült. Az egyik kiemelkedőbb
              feladatom a drag and drop teljes refactorálása és új funkciókkal
              való kiegészítése volt. Aminek én terveztem meg a logikáját, majd
              csapatban implementáltuk. Az implementáció 1 hónapon át tartott
              ami közben számos kihívással kellet szembenéznünk ugyan is olyan
              feature-öket is írnunk kellet, amit a react-beautiful-dnd nem
              támogatott.
            </p>
            <br />
            <p>
              Egyéb kiemelkedő feladatom a real time board template váltás, az
              uncategorized oszlop és a lobby animáció volt.
            </p>
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
            <h2>Tesztelés</h2>
            <p>
              <Counter end={17} />
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
      <S.Database>
        <S.Row>
          <S.TextBox>
            <h2>Adatbázis</h2>
            <p>
              MySql-t és redis-t használtunk a projekten. A kedvenc taskom az
              adatbázisok kapcsán az volt, hogy egy viszonylag ritkábban
              használt feature-ről kiderült, hogy bugosan működik bizonyos
              esetekben. Ahhoz, hogy kiderüljön mi a probléma le kellet másolnom
              a production adatbázist és localeban próbálkozni. Kiderült, hogy
              egy rosszul megírt select query az ok ami lényegében egy
              Descartes-szorzatot adott vissza. Olyan sokáig tartott lekérni ezt
              a querry-t, hogy bőven timeoutolt a request mire megjött volna az
              adat. Miután bement a fixem <Counter end={18076} />
              -al lett gyorsabb a lekérés, így már 1 másodperc alatt futott.
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
