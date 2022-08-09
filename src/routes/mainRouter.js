const {Router} = require('express');
const router = Router();

const {home} = require('../controllers/mainController');

router.get('/', home);

module.exports = router;