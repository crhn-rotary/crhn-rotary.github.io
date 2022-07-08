import {
  EuiButton,
  EuiContext,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
} from '@elastic/eui';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { text } from '../../text';
import { About } from './about';
import {
  loadContextForNow,
  PeachesContext,
  PeachesContextProps,
} from './context';
import { Intro } from './intro';
import { Steps } from './steps';

/**
 * `PeachesPage` contains the entire page for displaying details about
 * and ordering peaches.
 */
export const PeachesPage: React.FC = () => {
  const [context, setContext] = useState<PeachesContextProps>(
    loadContextForNow()
  );

  // update 'now' every 1m so that we can properly disable ordering
  useEffect(() => {
    if (!context.afterPickup) {
      // how many minutes until the top of the next hour
      const minutes = 60 - context.now.minutes();

      console.log(`Updating context in [${minutes}] minutes`);

      setTimeout(() => {
        const newContext = loadContextForNow(moment());

        // avoid re-rendering anything if nothing changes
        if (
          newContext.afterPickup !== context.afterPickup ||
          newContext.canOrder !== context.canOrder
        ) {
          setContext(newContext);
        }
      }, minutes * 60 * 1000);
    }
  }, [context]);

  let pageText = text.afterPickup;

  if (context.canOrder) {
    pageText = text.canOrder;
  } else if (!context.afterPickup) {
    pageText = text.blockOrder;
  }

  return (
    <PeachesContext.Provider value={context}>
      <EuiContext i18n={{ mapping: pageText }}>
        <Intro />
        <EuiSpacer />
        <Steps />
        <EuiSpacer />
        <About />
      </EuiContext>
    </PeachesContext.Provider>
  );
};
