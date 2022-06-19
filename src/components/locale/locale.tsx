import { EuiI18n } from '@elastic/eui';
import React, { ReactNode } from 'react';

/**
 * `LocaleProps` are shared with the `useLocale` hook.
 */
export interface LocaleProps {
  token: string;
  values?: Record<string, ReactNode>;
}

/**
 * `Locale` wraps `EuiI8n` to display the `token` as the default value if no
 * value exists, which should make discovery easy.
 *
 * @param props Token properties.
 */
export const Locale: React.FC<LocaleProps> = (props: LocaleProps) => (
  <EuiI18n default={props.token} token={props.token} values={props.values} />
);
