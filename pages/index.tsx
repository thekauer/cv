import Link from "next/link";
import Home from "../components/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["home", "common"])),
  },
});

const Index = () => <Home />;

export default Index;
