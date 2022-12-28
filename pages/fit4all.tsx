import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fit4all } from "../components/Fit4all/Fit4all";
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["f4a", "common"])),
  },
});

const Fit4AllPage = () => {
  return <Fit4all />;
};

export default Fit4AllPage;
