import {
  EuiImage,
  EuiSpacer,
  EuiSplitPanel,
  EuiSteps,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import React, { useContext } from 'react';
import { useLocale } from '../../components';
import { Contact } from './contact';
import { PeachesContext } from './context';
import { Order } from './order';
import { Pickup } from './pickup';

/**
 * `Steps` show the steps that need to followed by people that order in order
 * to pick them up.
 */
export const Steps: React.FC = () => {
  const { afterPickup, canOrder } = useContext(PeachesContext);

  const stepOneStatus = canOrder || !afterPickup ? 'current' : 'disabled';
  let stepTwoStatus: 'current' | 'disabled' | 'incomplete' = 'current';

  if (canOrder) {
    stepTwoStatus = 'incomplete';
  } else if (afterPickup) {
    stepTwoStatus = 'disabled';
  }

  return (
    <EuiSplitPanel.Outer id="steps">
      <EuiSplitPanel.Inner color="subdued" paddingSize="none">
        <EuiSplitPanel.Outer color="subdued" direction="row" hasShadow={false}>
          <EuiSplitPanel.Inner>
            <EuiTitle>
              <h1>{useLocale('pages.peaches.steps.title')}</h1>
            </EuiTitle>
            <EuiSpacer />
            <EuiSteps
              steps={[
                {
                  children: (
                    <>
                      <EuiText
                        color={
                          stepOneStatus === 'disabled' ? 'subdued' : undefined
                        }
                      >
                        <p>{useLocale('pages.peaches.steps.step.1.desc')}</p>
                      </EuiText>
                      <EuiSpacer />
                      <Order />
                    </>
                  ),
                  status: stepOneStatus,
                  title: useLocale('pages.peaches.steps.step.1.title'),
                },
                {
                  children: (
                    <>
                      <EuiText
                        color={
                          stepTwoStatus === 'disabled' ? 'subdued' : undefined
                        }
                      >
                        <p>{useLocale('pages.peaches.steps.step.2.desc')}</p>
                        <Pickup />
                      </EuiText>
                    </>
                  ),
                  status: stepTwoStatus,
                  title: useLocale('pages.peaches.steps.step.2.title'),
                },
              ]}
            />
          </EuiSplitPanel.Inner>
          <EuiSplitPanel.Inner>
            <EuiImage
              alt={useLocale('pages.peaches.fundraiser.img.alt')}
              hasShadow
              size="fullWidth"
              src="/images/pexels-sunsetoned-10026608.jpg"
            />
          </EuiSplitPanel.Inner>
        </EuiSplitPanel.Outer>
      </EuiSplitPanel.Inner>
      <EuiSplitPanel.Inner color="accent">
        <EuiText>
          <h2>{useLocale('pages.peaches.steps.thanks.title')}</h2>
          <p>{useLocale('pages.peaches.steps.thanks.desc')}</p>
        </EuiText>
        <EuiSpacer />
        <Contact />
      </EuiSplitPanel.Inner>
    </EuiSplitPanel.Outer>
  );
};
