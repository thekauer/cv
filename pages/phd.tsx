import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Phd from "../components/phd";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["phd", "common"])),
  },
});

export default function PhdPage() {
  return <Phd />;
}
