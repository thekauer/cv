import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Retro } from "../components/Retro/Retro";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["retro", "common"])),
  },
});

const RetroPage = () => {
  return <Retro />;
};

export default RetroPage;
