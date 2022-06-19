import {
  EuiButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiPopover,
} from '@elastic/eui';
import {
  google,
  outlook,
  office365,
  ics,
  CalendarEvent,
  yahoo,
} from 'calendar-link';
import { useCallback, useState } from 'react';
import { useLocale } from '../../components';
import { Constants } from './constants';

/**
 * `Calendar` provides a popover that allows the user to add the calendar event
 * to their preferred digital calendar.
 */
export const Calendar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const flip = useCallback(() => setOpen((open) => !open), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  const event: CalendarEvent = {
    description: 'Pick up your peaches order.',
    duration: [4, 'hours'],
    location: `${Constants.location.street}, ${Constants.location.cityStateZip}`,
    start: Constants.dates.pickup.format(),
    title: `Castle Rock Peaches - ${Constants.dates.pickup.format(
      'YYYY'
    )} Pickup`,
    url: 'https://www.castlerockpeaches.com/',
  };

  return (
    <EuiPopover
      button={
        <EuiButton color="accent" iconType="calendar" onClick={flip}>
          {useLocale('pages.peaches.steps.step.2.pickup.calendar')}
        </EuiButton>
      }
      closePopover={close}
      id="calendar-links"
      isOpen={open}
    >
      <EuiContextMenuPanel
        items={[
          <EuiContextMenuItem
            key="Apple"
            href={ics(event)}
            onClick={close}
            target="_blank"
          >
            {useLocale('pages.peaches.steps.step.2.pickup.calendar.apple')}
          </EuiContextMenuItem>,
          <EuiContextMenuItem
            key="Google"
            href={google(event)}
            onClick={close}
            target="_blank"
          >
            {useLocale('pages.peaches.steps.step.2.pickup.calendar.google')}
          </EuiContextMenuItem>,
          <EuiContextMenuItem
            key="Office365"
            href={office365(event)}
            onClick={close}
            target="_blank"
          >
            {useLocale('pages.peaches.steps.step.2.pickup.calendar.office365')}
          </EuiContextMenuItem>,
          <EuiContextMenuItem
            key="Outlook"
            href={outlook(event)}
            onClick={close}
            target="_blank"
          >
            {useLocale('pages.peaches.steps.step.2.pickup.calendar.outlook')}
          </EuiContextMenuItem>,
          <EuiContextMenuItem
            key="Yahoo"
            href={yahoo(event)}
            onClick={close}
            target="_blank"
          >
            {useLocale('pages.peaches.steps.step.2.pickup.calendar.yahoo')}
          </EuiContextMenuItem>,
        ]}
      />
    </EuiPopover>
  );
};
