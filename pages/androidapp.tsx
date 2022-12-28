import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AndroidApp from "../components/androidapp";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["androidapp", "common"])),
  },
});

export default function AndroidAppPage() {
  return <AndroidApp />;
}
