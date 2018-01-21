const router = require('express').Router();
const status = require('./_core/status');

const data = [
  {
    titles: ['Contact'],
    subtitles: ['TODO'],
    texts: ['TODO'],
  },
];

router.all('/', (req, res) =>
  new Promise(it => it(data))
    .then(status.check(res))
    .catch(console.log));

module.exports = router;

