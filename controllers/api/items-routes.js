const router = require('express').Router();
const {Item} = require('../../Models/index');


//CREATE NEW ITEM route: api/items/location:id
router.post('/location/:id', async (req, res) => {
    try {

        console.log(req.body);
        const newItem = await Item.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,  
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


//PUT route to update item by id api/items/:id/claim
router.put('/:id/claim', async (req, res) => {
    // update an item by its `id` value
    try {
      console.log("__________________________________");
      console.log('req.body');
      console.log(req.body);
      console.log("req.params.id");
      console.log(req.params.id);
      console.log("__________________________________");

      // const itemData = await Item.update(req.body, {
      //   where: {
      //     id: req.params.id,
      //   },
      // });
      // await itemData.save();

      const itemData = await Item.findByPk(req.params.id);

      console.log('itemData: ', itemData);

      itemData.set({
        claimed: true,
        user_id: req.session.user_id,
      })
      await itemData.save();



      if (!itemData[0]) {
        res.status(404).json({ message: 'No existing item with this id was found!' });
        return;
      }

      console.log("__________________________________");
      console.log('itemdata:');
      console.log(itemData);
      console.log("__________________________________");


      res.status(200).json(itemData);
    } catch (err) {
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