import {
  EuiHorizontalRule,
  EuiImage,
  EuiSplitPanel,
  EuiText,
} from '@elastic/eui';
import { useLocale } from '../../components';
import { Constants } from './constants';

/**
 * `Intro` provides the introductory details about the fundraiser.
 */
export const Intro: React.FC = () => (
  <EuiSplitPanel.Outer direction="row" hasShadow={false}>
    <EuiSplitPanel.Inner>
      <EuiText>
        <h2>{useLocale('rotary.name')}</h2>
        <EuiImage
          alt={useLocale('pages.peaches.fundraiser.img.alt')}
          hasShadow
          size="fullWidth"
          src="/images/peaches.jpg"
        />
      </EuiText>
    </EuiSplitPanel.Inner>
    <EuiSplitPanel.Inner color="subdued">
      <EuiText>
        <h2>{useLocale('pages.peaches.fundraiser.title')}</h2>
        <p>
          <strong>
            {useLocale('pages.peaches.fundraiser.offer', {
              dollars: Constants.box.price,
              pounds: Constants.box.weight,
            })}
          </strong>
        </p>
        <p>
          {useLocale('pages.peaches.fundraiser.source', {
            month_year: Constants.dates.nextYear.format('MMMM YYYY'),
          })}
        </p>
        <p>{useLocale('pages.peaches.fundraiser.desc')}</p>
        <EuiHorizontalRule />
        <p>
          {useLocale('pages.peaches.fundraiser.ordering', {
            date: Constants.dates.blockOrders.format('dddd, LL'),
            month_year: Constants.dates.nextYear.format('MMMM YYYY'),
          })}
        </p>
        <p>{useLocale('pages.peaches.fundraiser.ordering.warn')}</p>
        <p>{useLocale('pages.peaches.fundraiser.delivery')}</p>
        <p>
          {useLocale('pages.peaches.fundraiser.delivery.plan', {
            date: Constants.dates.pickup.format('dddd, LL'),
          })}
        </p>
      </EuiText>
    </EuiSplitPanel.Inner>
  </EuiSplitPanel.Outer>
);
