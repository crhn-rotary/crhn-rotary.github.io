import moment from 'moment';

/**
 * `Constants` are the site-wide constants that control user flow.
 */
export const Constants = {
  about: {
    whatListCount: 6,
  },
  box: {
    /**
     * Price per box of peaches.
     */
    price: 45,
    /**
     * Weight per box.
     */
    weight: 18,
  },
  contact: {
    call: {
      display: '206-383-8736',
      href: 'tel:2063838736',
    },
    email: {
      display: 'NoonCRSecretary@gmail.com',
      href: 'mailto:NoonCRSecretary@gmail.com?subject=Castle Rock Peaches 2022',
    },
  },
  dates: {
    afterPickup: moment('2022-08-28T00:00:00.000-0600'),
    allowOrders: moment('2022-06-15T00:00:00.000-0600'),
    blockOrders: moment('2022-08-16T00:00:00.000-0600'),
    nextYear: moment('2023-06-15T00:00:00.000-0600'),
    pickup: moment('2022-08-27T10:00:00.000-0600'),
  },
  location: {
    street: '1506 S. Wilcox St',
    cityStateZip: 'Castle Rock, CO 80104',
  },
  map: {
    apple:
      'https://maps.apple.com/?address=1506%20S%20Wilcox%20St,%20Castle%20Rock,%20CO%20%2080104,%20United%20States&auid=8600864465760493456&ll=39.356048,-104.867180&lsp=9902&q=Castle%20Rock%20Autoplex%20Chevrolet%20Buick%20GMC&_ext=CjMKBQgEEOIBCgQIBRADCgUIBhDjAQoECAoQAAoECFIQAQoECFUQDgoECFkQAQoFCKQBEAESJikA1B4xJq1DQDEWK7yU1zdawDl+qUSNTK5DQEEuKSU7GTdawFAE',
    bing: 'https://www.bing.com/maps?osid=7d299b62-776d-4605-b4b8-ebfd77af8b9b&cp=39.357677~-104.872089&lvl=16&imgid=509c9186-550f-424d-8c2e-2cdda7ec51a4&v=2&sV=2&form=S00027',
    google: 'https://goo.gl/maps/9nAXWjEb5bktEuAt8',
  },
  order: {
    href: 'https://checkout.square.site/merchant/W8T7QB8CRW81P/checkout/MQAY45DFEC7ABEV4GKHBDP64',
  },
  rotary: {
    crhn: 'https://www.crhn-rotary.com/',
  },
};
