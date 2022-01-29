import * as S from "./Retro.atoms";
import Image from "next/image";
import { RetroDemo } from "./RetroDemo/RetroDemo";

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
        <h2>Frontend</h2>
      </S.Frontend>
      <S.Test>
        <h2>Teszt</h2>
      </S.Test>
      <S.Backend>
        <h2>Backend</h2>
      </S.Backend>
      <S.Database>
        <h2>Adatbázis</h2>
      </S.Database>
    </S.Container>
  );
};
