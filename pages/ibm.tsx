import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IBM } from "../components/IBM/IBM";
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["ibm", "common"])),
  },
});

const IBMPage = () => {
  return <IBM />;
};

export default IBMPage;
