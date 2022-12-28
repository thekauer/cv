import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Retro } from "../components/Retro/Retro";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["retro", "common"])),
  },
});

const RetroPage = () => {
  return <Retro />;
};

export default RetroPage;
