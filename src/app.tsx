// import '@elastic/eui/dist/eui_theme_dark.css';
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiContext, EuiPageTemplate, EuiProvider } from '@elastic/eui';
import React from 'react';
import { Locale, useLocale } from './components';
import { siteText } from './text';
import { PeachesPage } from './pages';

/**
 * `App` provides the entire Single Page App content for the site.
 *
 * The site currently offers no navigation, so there is no need for React Router
 * or any other form of routing. If we change that (e.g., to combine sites),
 * then we will need to nest the selected page under routing.
 */
export const App: React.VFC = () => (
  <EuiProvider colorMode="light">
    <EuiContext i18n={{ mapping: siteText }}>
      <EuiPageTemplate>
        <EuiPageTemplate.Header
          iconType={() => (
            <img
              alt={useLocale('header.img.alt')}
              className="euiHeaderLogo"
              src="/images/rotary-logo-color-2019.svg"
            />
          )}
          pageTitle={<Locale token="header.title" />}
        />
        <EuiPageTemplate.Section>
          <PeachesPage />
        </EuiPageTemplate.Section>
      </EuiPageTemplate>
    </EuiContext>
  </EuiProvider>
);
