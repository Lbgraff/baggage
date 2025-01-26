const router = require('express').Router();
const userRoutes = require('./userAPI');
const connectionRoutes = require('./connectionAPI')


router.use('/users', userRoutes);
router.use('/connections', connectionRoutes)


module.exports = router;
