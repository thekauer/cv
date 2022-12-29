import Link from "next/link";
import Home from "../components/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["home", "common"])),
  },
});

const Index = (props: any) => {
  console.log(props);
  return <Home />;
};

export default Index;
