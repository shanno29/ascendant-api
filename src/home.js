const router = require('express').Router();
const status = require('./_core/status');

const data = [
  {
    titles: [
      'Welcome to',
      'Ascendant Pharmacy Consultants',
    ],
    subtitles: [
      '“Higher Standards, Exceptional Consulting”',
    ],
    texts: [
      'Our desire is to tailor our services to meet your needs.',
      'Our standard is to exceed your expectations.',
      'Let us show you the benefits of working with a company that',
      'puts the Care in HealthCare.',
    ],
  },
];

router.all('/', (req, res) =>
  new Promise(it => it(data))
    .then(status.check(res))
    .catch(console.log));

module.exports = router;
