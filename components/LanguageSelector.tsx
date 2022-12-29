import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  height: 1em;
  width: 1.5em;
  cursor: pointer;
  margin: 0em 0.5em;
`;

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, query, asPath } = router;
  function changeLanguage(locale: string) {
    i18n.changeLanguage(locale);
    router.push({ pathname, query }, asPath, {
      locale,
      scroll: false,
      shallow: true,
    });
  }
  const isEnglish = i18n.language === "en";
  return (
    <div
      onClick={() => changeLanguage(isEnglish ? "hu" : "en")}
      style={{ height: "1em" }}
    >
      {isEnglish ? (
        <Img src="/static/hu_flag.svg" />
      ) : (
        <Img src="/static/uk_flag.svg" />
      )}
    </div>
  );
};
