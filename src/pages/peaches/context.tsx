import moment, { Moment } from 'moment';
import React from 'react';
import { Constants } from './constants';

export interface PeachesContextProps {
  afterPickup: boolean;
  canOrder: boolean;
  now: Moment;
}

/**
 * Generate a context for `now`.
 *
 * @param now The current time.
 * @returns The context based on `now`.
 */
export const loadContextForNow = (
  now: Moment = moment()
): PeachesContextProps => {
  const afterPickup = Constants.dates.afterPickup.isSameOrBefore(now);

  return {
    afterPickup,
    canOrder:
      !afterPickup &&
      Constants.dates.allowOrders.isSameOrBefore(now) &&
      Constants.dates.blockOrders.isSameOrAfter(now),
    now,
  };
};

/**
 * `PeachesContext` provides the global state for the Peaches fundraiser.
 */
export const PeachesContext = React.createContext<PeachesContextProps>(
  loadContextForNow()
);
