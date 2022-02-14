const router = require('express').Router();
const { Comment, Item, Location, User } = require('../models');

//SHOW ALL LOCATIONS
router.get('/', async (req, res) => {
  try {
    // Get all Locations
    const locationData = await Location.findAll();

    //map location data into new array that can be read by handlebars
    const locations = locationData.map((location) => location.get({ plain: true }));
    console.log(locations, req.session.user_id);
    // Pass data to handlbars to render 
    res.render('homepage', {       
      user_id: req.session.user_id,
      logged_in: req.session.logged_in, locations });
  } catch (err) {
    res.status(500).json(err);
  }
});


//SHOW ITEMS by location 
router.get('/location/:id', async (req, res) => {
  try {
    // Get all items where Locations matches url param
    const itemData = await Item.findAll(
      {
        where: { location_id: req.params.id },
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Location,
            attributes: ['location'],
          },
          {
            model: Comment,
            attributes: ['content'],
          },
        ],
      }
    );

    const locationData = await Location.findByPk(req.params.id);

    const location = locationData.get({ plain: true });

    //map item data into new array that can be read by handlebars
    const items = itemData.map((item) => item.get({ plain: true }));
    console.log(items);


    // Pass data to handlbars to render 
    res.render('location', { items, location, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//ONE ITEM
router.get('/item/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });

    const item = itemData.get({ plain: true });

    console.log("__________________________________");
    console.log('item:');
    console.log(item);
    console.log("__________________________________");

    res.render('item', { 
      item,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in, });
  } catch (err) {
    res.status(500).json(err);
  }
});



//show login 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/'); //refresh page if the user is logged in
    return;
  }
  res.render('login');
});


module.exports = router;