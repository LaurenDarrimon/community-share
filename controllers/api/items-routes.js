const router = require('express').Router();
const {Item} = require('../../Models/index');


//CREATE NEW ITEM route: api/items/location:id
router.post('/location/:id', async (req, res) => {
    try {

        console.log(req.body);
        const newItem = await Item.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.body.user_id,  
            contact_info: req.body.contact_info,
            location_id: req.params.id,

        });
        console.log(newItem);

        res.json(newItem);
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