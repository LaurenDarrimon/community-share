const router = require('express').Router();
const {Comment} = require('../../Models/index');

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
