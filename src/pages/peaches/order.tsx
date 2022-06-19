import { EuiButton, EuiText } from '@elastic/eui';
import React, { useContext } from 'react';
import { Locale } from '../../components';
import { Constants } from './constants';
import { PeachesContext } from './context';

/**
 * `Order` displays the order button when ordering is open, but it shows a late
 * text value when the user cannot order anymore.
 */
export const Order: React.FC = () => {
  const { afterPickup, canOrder } = useContext(PeachesContext);

  if (!canOrder) {
    if (afterPickup) {
      return (
        <EuiText color="subdued">
          <Locale
            token="pages.peaches.steps.step.1.late"
            values={{
              month_year: Constants.dates.nextYear.format('MMMM YYYY'),
            }}
          />
        </EuiText>
      );
    }

    return null;
  }

  return (
    <EuiButton
      color="accent"
      href={Constants.order.href}
      iconType="package"
      target="_blank"
    >
      <Locale token="pages.peaches.steps.step.1.buy" />
    </EuiButton>
  );
};
