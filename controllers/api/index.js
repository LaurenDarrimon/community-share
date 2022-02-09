const router = require('express').Router();

const userRoutes = require('./userRoutes');
const itemsRoutes = require('./items-routes');
const commentsRoutes = require('./comments-routes');
const loctionsRoutes = require('./locations-routes');

router.use('/users', userRoutes);
router.use('/items', itemsRoutes);
router.use('/comments', commentsRoutes);
router.use('/locations', locationsRoutes);

module.exports = router;