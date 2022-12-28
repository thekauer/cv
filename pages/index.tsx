import Link from "next/link";
import Home from "../components/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "common"])),
  },
});

const Index = () => <Home />;

export default Index;
