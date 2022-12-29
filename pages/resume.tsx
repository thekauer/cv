import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Resume from "../components/resume";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["resume", "common"])),
  },
});

export default function ResumePage() {
  return <Resume />;
}
