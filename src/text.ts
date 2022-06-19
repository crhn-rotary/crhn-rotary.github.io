/**
 * `siteText` contains keys that are shared regardless of the state of the
 * site.
 */
export const siteText: Record<string, string> = {
  'about.desc.1':
    'The Castle Rock High Noon Rotary Club is part of a global network of 1.2 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change - across the globe, in our communities, and in ourselves.',
  'about.desc.2':
    "Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects. From literacy and peace to water and health, we are always working to better our world, and we stay committed to the end. You can see members of The Rotary Club of Castle Rock High Noon distributing dictionaries to third graders at Douglas County Schools, donating time and funds to support local non-profits like Wellspring Community where adults with special needs are empowered to lead full lives, manning a rest stop at the annual Elephant Rock bike race and more.",
  'about.img.alt': 'Castle Rock Rotary Club event - Ducky Derby 2022',
  'about.title': 'About Us',
  'about.how.desc':
    'By supporting the annual Peach Sale, you will help the Castle Rock High Noon Rotary Club address needs in our local community and afar. Please click the button below to see the latest projects we are working on.​',
  'about.how.link': 'Our Rotary Club',
  'about.how.title': 'How You Can Help',
  'about.what.desc':
    "Rotary members believe that we have a shared responsibility to take action on our world's most persistent issues. Our 35,000+ clubs work together to:",
  'about.what.list.0': 'Promote peace',
  'about.what.list.1': 'Fight disease',
  'about.what.list.2': 'Provide clean water, sanitation, and hygiene',
  'about.what.list.3': 'Save mothers and children',
  'about.what.list.4': 'Support education',
  'about.what.list.5': 'Grow local economies',
  'about.what.title': 'What We Do',
  'header.img.alt': 'Rotary',
  'header.title': ' ', // a blank space to ensure nothing is printed
  'rotary.name': 'Castle Rock High Noon Rotary Club',
};

/**
 * Base text shared by all versions of the Peach pages.
 */
export const peachesPageText: Record<string, string> = {
  'pages.peaches.fundraiser.img.alt': 'Peaches stock photo',
  'pages.peaches.fundraiser.title': 'Annual Peach Sale and Fundraiser',
  'pages.peaches.steps.title': 'Steps to Follow',
  'pages.peaches.steps.step.1.title': 'Step 1: Order Peaches',
  'pages.peaches.steps.step.2.address.links': 'Map Links',
  'pages.peaches.steps.step.2.address.link.apple': 'Apple Maps',
  'pages.peaches.steps.step.2.address.link.bing': 'Bing Maps',
  'pages.peaches.steps.step.2.address.link.google': 'Google Maps',
  'pages.peaches.steps.step.2.address.name': 'Castle Rock Autoplex',
  'pages.peaches.steps.step.2.title': 'Step 2: Pick Up Your Peaches',
};

/**
 * Peaches page content when ordering is active.
 */
export const peachesCanOrder: Record<string, string> = {
  'pages.peaches.fundraiser.delivery':
    'The orchard delivers the peaches to us. Once delivered, we make them available for pickup. Instructions will be emailed as the delivery date approaches. Pickup will be in Castle Rock, CO.',
  'pages.peaches.fundraiser.delivery.plan':
    'Peaches are picked fresh, then delivered to us for the day of pickup. Pickup will be on {date}.',
  'pages.peaches.fundraiser.desc':
    'The peaches are freestone, about baseball size, and are sold by the box.',
  'pages.peaches.fundraiser.offer': '{pounds} pound (lb) box for ${dollars}',
  'pages.peaches.fundraiser.ordering':
    'We work directly with orchards, so please be sure to order before {date} because we are not able to make deadline exceptions.',
  'pages.peaches.fundraiser.ordering.warn':
    'Our deadlines are imposed by the orchard, so please order early to help us to better help you. Thank you!',
  'pages.peaches.fundraiser.source':
    "Our annual peach fundraiser has begun! Like last year, we will be ordering peaches from Colorado's Western Slopes, from Palisade.",
  'pages.peaches.steps.step.1.buy': 'Order Peaches',
  'pages.peaches.steps.step.1.desc':
    'When you order your peaches, supply an email address that you check. As pickup approaches, we will send a reminder to that email.',
  'pages.peaches.steps.step.2.pickup.address.title': 'Address',
  'pages.peaches.steps.step.2.pickup.calendar': 'Add to Calendar',
  'pages.peaches.steps.step.2.pickup.calendar.apple': 'Apple (iCal)',
  'pages.peaches.steps.step.2.pickup.calendar.google': 'Google',
  'pages.peaches.steps.step.2.pickup.calendar.office365': 'Office 365',
  'pages.peaches.steps.step.2.pickup.calendar.outlook': 'Outlook',
  'pages.peaches.steps.step.2.pickup.calendar.yahoo': 'Yahoo',
  'pages.peaches.steps.step.2.pickup.datetime': '{date} from 10 AM to 2 PM MST',
  'pages.peaches.steps.step.2.pickup.datetime.title': 'Pickup',
  'pages.peaches.steps.step.2.desc':
    'We will send an email reminder to the email used when ordering the peaches, but the location and date are below!',
  'pages.peaches.steps.thanks.title': 'Thank you for your order!',
  'pages.peaches.steps.thanks.desc':
    'Questions? Call Teri Feider, Cell (text or call)',
};

/**
 * `text` provides all of the strings for the website.
 */
export const text: Record<string, Record<string, string>> = {
  afterPickup: {
    ...siteText,
    ...peachesPageText,
    'pages.peaches.fundraiser.delivery':
      'The orchard delivers the peaches to us. Once delivered, we make them available for pickup. Instructions will be emailed as the delivery date approaches. Pickup will be in Castle Rock, CO.',
    'pages.peaches.fundraiser.delivery.plan':
      'Peaches are generally delivered and available for pickup at the end of August.',
    'pages.peaches.fundraiser.desc':
      'The peaches are freestone, about baseball size, and are sold by the box.',
    'pages.peaches.fundraiser.offer':
      'For 2022, we were able to offer an {pounds} pound (lb) box for ${dollars}.',
    'pages.peaches.fundraiser.ordering':
      'Check back in {month_year} for what we can offer next year!',
    'pages.peaches.fundraiser.ordering.warn':
      'Our deadlines are imposed by the orchard, so please order early to help us to better help you when ordering reopens. Thank you!',
    'pages.peaches.fundraiser.source':
      "Our annual peach fundraiser will begin again in {month_year}. Last year, we were able to order peaches from Colorado's Western Slopes, from Palisade. We will update this site when the fundraiser begins and let you know where we will be getting them from this year!",
    'pages.peaches.steps.step.1.desc':
      'Ordering is currently closed until the next peach harvesting season.',
    'pages.peaches.steps.step.1.late': 'Please check back in {month_year}.',
    'pages.peaches.steps.step.2.desc':
      "We will provide the pickup details as we prepare for next year's orders!",
    'pages.peaches.steps.thanks.title': 'Thank you for your interest!',
    'pages.peaches.steps.thanks.desc': 'Questions? Feel free to email us:',
  },
  blockOrder: {
    ...siteText,
    ...peachesPageText,
    ...peachesCanOrder,
    'pages.peaches.fundraiser.ordering':
      'We work directly with orchards and they imposed a deadline of {date} for ordering. Unfortunately this deadline has passed, so ordering is now closed.',

    'pages.peaches.steps.step.1.desc':
      'We are coordinating with the orchard to get all boxes freshly picked for pickup. Thank you!',
    'pages.peaches.steps.step.1.late':
      'Ordering has closed. If you already ordered, please remember to pick up your peaches!',
    'pages.peaches.steps.step.2.desc': 'Remember to pick up your orders!',
  },
  canOrder: {
    ...siteText,
    ...peachesPageText,
    ...peachesCanOrder,
  },
};
