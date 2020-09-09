const router = require('express').Router();
const Controller = require('../controllers/controller');
const authentication = require('../middlewares/authentication')

router.post('/register', Controller.register);
router.post('/login', Controller.login);
router.use(authentication);
router.get('/profile', Controller.profile);

module.exports = router;