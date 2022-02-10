const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

router.post('/comment/:id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.params.id,

        });
        console.log(newComment);

        res.json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;
