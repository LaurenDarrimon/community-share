const router = require('express').Router();
const {Item} = require('../../Models/index');

router.post('/post/:location', async (req, res) => {
    try {
        const newItem = await Item.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
            location_id: req.params.location,

        });
        console.log(newPost);

        res.json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/delete/:id', async (req, res) => {
    const item = await Item.destroy({
        where: {
            id: req.params.id,
        }
    })
})


module.exports = router;