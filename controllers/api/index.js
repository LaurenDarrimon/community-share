const router = require('express').Router();

const userRoutes = require('./userRoutes');
const itemsRoutes = require('./items-routes');
const commentsRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/items', itemsRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;