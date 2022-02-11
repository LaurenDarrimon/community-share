const router = require('express').Router();

const userRoutes = require('./user-routes');
const itemsRoutes = require('./items-routes');
const commentsRoutes = require('./comment-routes');
const locationsRoutes = require('./locations-routes');

router.use('/users', userRoutes);
router.use('/items', itemsRoutes);
router.use('/comments', commentsRoutes);
// router.use('/locations', locationsRoutes);

module.exports = router;