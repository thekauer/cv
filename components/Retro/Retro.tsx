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
        <h2>Retrospektív alkalmazás</h2>
        <RetroDemo />
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
