import React, { useContext } from 'react';
import { Locale } from '../../components';
import { Address } from './address';
import { Calendar } from './calendar';
import { Constants } from './constants';
import { PeachesContext } from './context';

/**
 * `Pickup` renders the pickup details when relevant, and renders nothing when
 * they should not be displayed (after pickup is past).
 */
export const Pickup: React.FC = () => {
  const { afterPickup } = useContext(PeachesContext);

  if (afterPickup) {
    return null;
  }

  return (
    <>
      <h3>
        <Locale token="pages.peaches.steps.step.2.pickup.datetime.title" />
      </h3>
      <p>
        <Locale
          token="pages.peaches.steps.step.2.pickup.datetime"
          values={{ date: Constants.dates.pickup.format('dddd, LL') }}
        />
      </p>
      <Calendar />
      <h3>
        <Locale token="pages.peaches.steps.step.2.pickup.address.title" />
      </h3>
      <Address />
    </>
  );
};
