import {
  EuiButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiPopover,
} from '@elastic/eui';
import React, { useCallback, useState } from 'react';
import { Locale, useLocale } from '../../components';
import { Constants } from './constants';

/**
 * `Address` displays the address for pickup, as well as a popover that lets the
 * user to load the mapping website (or app) of their preference.
 */
export const Address: React.FC = () => {
  const [open, setOpen] = useState(false);
  const flip = useCallback(() => setOpen((open) => !open), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <p>
        <strong>{useLocale('pages.peaches.steps.step.2.address.name')}</strong>
        <br />
        {Constants.location.street}
        <br />
        {Constants.location.cityStateZip}
      </p>
      <EuiPopover
        button={
          <EuiButton color="accent" iconType="mapMarker" onClick={flip}>
            {useLocale('pages.peaches.steps.step.2.address.links')}
          </EuiButton>
        }
        closePopover={close}
        id="address-links"
        isOpen={open}
      >
        <EuiContextMenuPanel
          items={Object.entries(Constants.map)
            .sort(([k1], [k2]) => k1.localeCompare(k2))
            .map(([key, value]) => (
              <EuiContextMenuItem
                key={key}
                href={value}
                onClick={close}
                target="_blank"
              >
                <Locale
                  token={`pages.peaches.steps.step.2.address.link.${key}`}
                />
              </EuiContextMenuItem>
            ))}
        />
      </EuiPopover>
    </>
  );
};
