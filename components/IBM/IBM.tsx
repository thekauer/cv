import * as S from "./IBM.atoms";
import Image from "next/image";

export const IBM = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Row>
          <h1>IBM Video Streaming</h1>
        </S.Row>
      </S.Header>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>IBM Video Streaming</h2>
            <p>
              Az IBM Video Streaming egy olyan streaming szolgáltatás, amely
              lehetővé teszi a felhasználóknak, hogy videókat, hanganyagokat és
              interaktív tartalmakat osszanak meg a közösséggel. Támogat on
              demand és live streaminget is. Elérhető átlag embereknek és üzleti
              felhasználóknak egyaránt.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Slack</h2>
            <p>
              Együtt dolgoztam a Slack csapatával, hogy szolgáltatásunk Slack
              integrációján. Ezzel lehetővé válik, hogy a felhasználók a Slacken
              belül tudjanak streameket és on demand tartalmakat megosztani és
              megtekinteni. A megvalósításhoz, node.js-t, terraformot és IBM
              cloudot használtam.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>360 Video vezérlés</h2>
            <p>
              A 360 videó szolgáltatásunkhoz implementáltam, egy akadálymentes
              vezérlést, amivel desktopon kontrol koronggal, mobilon érintő
              képernyővel és gyroszkóppal lehet navigálni a videóban. A
              funkcióhoz Three.js-t használtam. A vezérlésbe programoztam, egy
              kis tehetetlenséget is, hogy természetesebb legyen a mozgás.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Visibility detection</h2>
            <p>
              A platformon nem bandwidth hanem viewer hour alapú a számlálás.
              Épp egy visibility-vel kapcsolatos taskon dolgoztam, amikor jött
              az ötlet, hogy akkor már lejjebb is válthatnánk a videó minőségét,
              ha a felhasználó nem nézi a videót. 2 nappal a release után már 50
              Tb adatotforgalmat spóroltunk meg.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>React testing libarary és akadálymentesítés</h2>
            <p>
              Nagyon fontos volt az akadálymentesítés, a projekten. Amikor a
              csapathoz csatlakoztam, még enzymot használtunk tesztelésre. Akkor
              még csak nekem volt tapasztalatom a testing libraryvel. Sikerült
              meggyőzni a csapatot a fokozatos váltásról. A testing library
              segítségével sokkal könnyebben tudtuk tesztelni az
              akadálymentesített komponenseket.
            </p>
          </S.TextBox>
        </S.Row>
      </S.Section>
    </S.Container>
  );
};
