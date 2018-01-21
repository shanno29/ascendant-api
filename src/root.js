const router = require('express').Router();
const status = require('./_core/status');
const config = require('./_core/config');

const path = `${config.host}:${config.port}/public`;

const data = {
  splash: `${path}/splash.jpg`,
  toolbar: {
    color: '#00000000',
    logo: `${path}/logo.jpg`,
    items: [
      {
        link: 'about',
        text: 'About',
      },
      {
        link: 'consulting',
        text: 'Consulting',
      },
      {
        link: 'forms',
        text: 'Forms',
      },
      {
        link: 'contact',
        text: 'Contact',
      },
    ],
  },
  footer: {
    color: '#1565c0',
    items: [
      [
        'Email: info-card@epcepc.com',
        'Phone: (855) 374-1029',
        'Fax: (855) 357-3557',
      ],
      [
        'Address:',
        '323 NW 12th Street,',
        '8Ste 108 Doral, FL 33126',
      ],
      [
        '© 2017 Matthew Shannon',
        'Legal Disclaimer',
        'Privacy Policy',
      ],
    ],
    buttons: [
      {
        text: 'Like us on Facebook',
        link: 'https://www.facebook.com/',
        image: 'facebook',
        color: '#3B5998',
      },
      {
        text: 'Follow us on Twitter',
        link: 'https://www.twitter.com/',
        image: 'twitter',
        color: '#00aced',
      },
    ],
  },
};

router.all('/', (req, res) =>
  new Promise(it => it(data))
    .then(status.check(res))
    .catch(console.log));

module.exports = router;

