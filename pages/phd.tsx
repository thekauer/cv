import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Phd from "../components/phd";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["phd", "common"])),
  },
});

export default function PhdPage() {
  return <Phd />;
}
