import { dir } from 'i18next';
import { Layout } from '../../components/Layout';
import { languages } from '../../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface Props {
  children: React.ReactNode;
  params: { lng: string };
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
