export const fallbackLng = 'en';
export const languages = [fallbackLng, 'hu'];
export const defaultNS = 'translation';

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
