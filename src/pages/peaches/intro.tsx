import {
  EuiHorizontalRule,
  EuiImage,
  EuiMarkdownFormat,
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
        <EuiMarkdownFormat>
          {useLocale('pages.peaches.fundraiser.intro', {
            dollars: Constants.box.price,
            lastYear: Constants.dates.pickup.format('YYYY'),
            monthYear: Constants.dates.nextYear.format('MMMM YYYY'),
            orderByDate: Constants.dates.lastOrders.format('dddd, LL'),
            pickupDate: Constants.dates.pickup.format('dddd, LL'),
            pounds: Constants.box.weight,
          })}
        </EuiMarkdownFormat>
      </EuiText>
    </EuiSplitPanel.Inner>
  </EuiSplitPanel.Outer>
);
