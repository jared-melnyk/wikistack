const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('you hit the main app GET');
  } catch (e) {
    console.log(e);
  }
});

router.post('/', (req, res) => {
  try {
    res.send('you hit the main app POST');
  } catch (e) {
    console.log(e);
  }
});

router.get('/add', (req, res) => {
  try {
    res.send('you hit the add post GET');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
