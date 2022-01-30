import * as S from "./Fit4All.atoms";
import Image from "next/image";

export const Fit4all = () => {
  return (
    <S.Container>
      <S.Header>
        <h1>Fit4All</h1>
      </S.Header>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Fit4All</h2>
            <p>Chart js vagy hasonló animálva</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Tech</h2>
            <p>
              nextjs logó feket pulse css effektel,nestjs logo filter shadow val
              animálva
            </p>
            <p>én fektettem le az alapjait</p>
          </S.TextBox>
          <S.TechLogos>
            <Image
              src="/static/nestjs.svg"
              width={150}
              height={150}
              id="nest"
            />
            <Image
              src="/static/nextjs.svg"
              width={150}
              height={150}
              id="next"
            />
          </S.TechLogos>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Authentikáció</h2>
            <p>Lakat animálva</p>
            <p>én írtam az auth0-t és a jwt-s authot is</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Tesztelés</h2>
            <p>Spec ikon animálva</p>
            <p>e2e tesztek cypress és testing library</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
    </S.Container>
  );
};
