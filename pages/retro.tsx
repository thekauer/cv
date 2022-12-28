import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Retro } from "../components/Retro/Retro";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["retro", "common"])),
  },
});

const RetroPage = () => {
  return <Retro />;
};

export default RetroPage;
