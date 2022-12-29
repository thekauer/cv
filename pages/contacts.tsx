import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Contacts from "../components/contacts";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["contacts", "common"])),
  },
});

export default function ContactsPage() {
  return <Contacts />;
}
