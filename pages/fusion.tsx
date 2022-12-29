import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Fusion from "../components/fusion";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["fusion", "common"])),
  },
});

export default function FusionPage() {
  return <Fusion />;
}
