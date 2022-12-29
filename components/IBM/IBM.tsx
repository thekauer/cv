import * as S from "./IBM.atoms";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const IBM = () => {
  const { t } = useTranslation("ibm");
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
            <p>{t("desc")}</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Slack</h2>
            <p>{t("slack")}</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>{t("360_title")}</h2>
            <p>{t("360")}</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>Visibility detection</h2>
            <p>{t("visibility")}</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <S.TextBox>
            <h2>{t("rtl_title")}</h2>
            <p>{t("rtl")}</p>
          </S.TextBox>
        </S.Row>
      </S.Section>
    </S.Container>
  );
};
