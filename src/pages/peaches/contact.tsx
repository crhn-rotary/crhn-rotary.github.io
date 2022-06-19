import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import React, { useContext } from 'react';
import { Constants } from './constants';
import { PeachesContext } from './context';

/**
 * `Contact` controls the mechanisms that the user can use to contact us.
 *
 * If the date is `afterPickup`, then we will no longer offer the ability
 * to easily call someone.
 */
export const Contact: React.FC = () => {
  const { afterPickup } = useContext(PeachesContext);

  const email = (
    <EuiButton
      href={Constants.contact.email.href}
      color="accent"
      iconType="email"
    >
      {Constants.contact.email.display}
    </EuiButton>
  );

  if (afterPickup) {
    return email;
  }

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton
          href={Constants.contact.call.href}
          color="accent"
          iconType="mobile"
        >
          {Constants.contact.call.display}
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>{email}</EuiFlexItem>
    </EuiFlexGroup>
  );
};
