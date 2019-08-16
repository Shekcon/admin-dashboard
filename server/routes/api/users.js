const router = require('express').Router();
const user = require('../../controllers/user');
const passport = require('passport');

router.use('/:username', passport.authenticate('jwt', { session: false }))

// get information user
router.get('/:username', user.getUser);

// get all user
router.get('', user.getAll);

module.exports = router;