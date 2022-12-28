import { useTranslation } from '../../i18n';

export default async function Page({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'home');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>Some content</p>
    </div>
  );
}
