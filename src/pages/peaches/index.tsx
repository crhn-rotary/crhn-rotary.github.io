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

  // update 'now' every 10s so that we can properly disable ordering
  // useEffect(() => {
  //   setTimeout(() => {
  //     const newContext = loadContextForNow(moment('2022-09-20'));

  //     // avoid re-rendering anything if nothing changes
  //     if (
  //       newContext.afterPickup !== context.afterPickup ||
  //       newContext.canOrder !== context.canOrder
  //     ) {
  //       setContext(newContext);
  //     }
  //   }, 10000);
  // }, [context]);

  let pageText = text.afterPickup;

  if (context.canOrder) {
    pageText = text.canOrder;
  } else if (!context.afterPickup) {
    pageText = text.blockOrder;
  }

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiButton
            onClick={() => setContext(loadContextForNow(moment('2022-07-01')))}
          >
            Can Order
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            onClick={() => setContext(loadContextForNow(moment('2022-08-20')))}
          >
            Block Order
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            onClick={() => setContext(loadContextForNow(moment('2022-09-20')))}
          >
            After Pickup
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <PeachesContext.Provider value={context}>
        <EuiContext i18n={{ mapping: pageText }}>
          <Intro />
          <EuiSpacer />
          <Steps />
          <EuiSpacer />
          <About />
        </EuiContext>
      </PeachesContext.Provider>
    </>
  );
};
