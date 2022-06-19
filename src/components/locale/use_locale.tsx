import { useEuiI18n } from '@elastic/eui';
import { LocaleProps } from './locale';

/**
 * `useLocale` wraps `useEuiI8n` to display the `token` as the default value if
 * no value exists, which should make discovery easy.
 *
 * @param token The token looked up in the locale.
 * @param values Optional values that go with the token.
 * @returns The loaded token's displayed value.
 */
export const useLocale = (
  token: LocaleProps['token'],
  values?: LocaleProps['values']
) => useEuiI18n(token, token, values);
