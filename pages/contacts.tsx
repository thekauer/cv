import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Contacts from "../components/contacts";
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["contacts", "common"])),
  },
});

export default function ContactsPage() {
  return <Contacts />;
}
