import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Fusion from "../components/fusion";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["phd", "common"])),
  },
});

export default function FusionPage() {
  return <Fusion />;
}
