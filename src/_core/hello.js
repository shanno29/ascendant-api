const router = require('express').Router();

// config.url/api/
router.all('', (req, res) => {
  res.send('Hello From Ascendant');
});

module.exports = router;
