import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiSpacer,
  EuiSplitPanel,
  EuiText,
} from '@elastic/eui';
import { Locale, useLocale } from '../../components';
import { Constants } from './constants';

/**
 * `About` shows a constant about section describing the club.
 */
export const About: React.FC = () => (
  <EuiSplitPanel.Outer>
    <EuiSplitPanel.Inner color="subdued">
      <EuiSplitPanel.Outer direction="row" hasBorder={false} hasShadow={false}>
        <EuiSplitPanel.Inner color="subdued" paddingSize="none">
          <EuiText>
            <h1>{useLocale('about.title')}</h1>
            <p>{useLocale('about.desc.1')}</p>
            <p>{useLocale('about.desc.2')}</p>
          </EuiText>
        </EuiSplitPanel.Inner>
        <EuiSplitPanel.Inner color="subdued">
          <EuiImage
            alt={useLocale('about.img.alt')}
            hasShadow
            size="fullWidth"
            src="/images/ducky.derby.2022.jpg"
          />
        </EuiSplitPanel.Inner>
      </EuiSplitPanel.Outer>
    </EuiSplitPanel.Inner>
    <EuiSplitPanel.Inner color="plain">
      <EuiText>
        <h1>{useLocale('about.what.title')}</h1>
        <p>{useLocale('about.what.desc')}</p>
        <ul>
          {Array(Constants.about.whatListCount)
            .fill(0)
            .map((_, i) => (
              <li key={`about-what-${i}`}>
                <Locale token={`about.what.list.${i}`} />
              </li>
            ))}
        </ul>
      </EuiText>
      <EuiSpacer size="s" />
    </EuiSplitPanel.Inner>
    <EuiSplitPanel.Inner color="subdued">
      <EuiText>
        <h1>{useLocale('about.how.title')}</h1>
        <p>{useLocale('about.how.desc')}</p>
        <EuiFlexGroup justifyContent="spaceAround">
          <EuiFlexItem grow={false}>
            <EuiButton
              href={Constants.rotary.crhn}
              color="text"
              iconType="link"
              target="_blank"
            >
              {useLocale('about.how.link')}
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiText>
    </EuiSplitPanel.Inner>
  </EuiSplitPanel.Outer>
);
