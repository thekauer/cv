import * as S from "./Fit4All.atoms";
import Image from "next/image";

export const Fit4all = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Row>
          <h1>Fit4All</h1>
          <Image src="/static/work-in-progress.png" width={100} height={100} />
        </S.Row>
      </S.Header>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Fit4All</h2>
            <p>
              A Fit4All egy olyan platform aminek,a segítségével tudomány
              alapokra helyezhetjük a mindennapos edzéseket. Egy pulzoxy meter
              nevű véroxigénszint mérő adatait dolgozza fel. Lehetőségük van
              edzőknek és az ügyfeleiknek regisztrálni, akár meghívás útján. Az
              edzők számtalan adatot láthatnak az ügyfelekről amik segítségével
              sokkal hatékonyabb edzéstervet állíthatnak elő.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Kezdetek</h2>
            <p>
              A projekt az én általam készített proof of concept alkalmazással
              kezdődött. Ez már tartalmazott saját jwt, access token alapú
              authentikációt, cachelt válaszokat, request validálást, swagger
              dokumentációt, és titkosított adatbázist is, illetve, egy
              minimális frontendet amivel mindezt ki lehetett próbálni.
            </p>
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
            <p>
              A kezdetben azt az authentikációt használtuk amit, én készítettem.
              Nagyon sok kutatással készült és biztonságos is volt. Viszont
              felmerült az ügyfél részéről az igény, hogy használjunk inkább egy
              third party szolgáltatást, és az Auth0-ra esett a választás.
              Aminek szintén a legnagyobb részét én implementáltam.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Tesztelés</h2>
            <p>
              Ezen a projekten is igyekszünk komolyan venni a tesztelést. Itt
              már vannak front- és backend end to end tesztek is, amelyek
              legnagyobb részét én írtam. Frontenden Cypressel backenden pedig a
              nest saját eszköztárával.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Adatbázis</h2>
            <p>
              Mivel az adatbázisban titkosítva tároljuk az adatokat,készítettem
              egy EncryptedColumn nevű dekortárt, amit ugyan úgy lehet használni
              mint a Column decoratort viszont magától titkosítja az adatokat.
              Ez nagy mértékben könnyítette a fejlesztés folyamatát. Még ide
              tartozik, hogy az alkalmazás nagyon sok adattal dolgozik és ehhez
              készítettem "okos" seedeket, amik szintén jelentősen gyorsították
              a fejlesztés ütemét.
            </p>
          </S.TextBox>
          <S.ImageShadow>
            <S.DbImageContainer>
              <Image
                src="/static/encrypted_column.svg"
                width={940}
                height={748}
              />
            </S.DbImageContainer>
          </S.ImageShadow>
        </S.Row>
      </S.Section>
    </S.Container>
  );
};
