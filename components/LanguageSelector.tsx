import { useTranslation } from "next-i18next";
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
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
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
