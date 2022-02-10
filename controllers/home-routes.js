const router = require('express').Router();
const { Items, Users, Locations } = require('../models');

//SHOW ALL LOCATIONS
router.get('/', async (req, res) => {
    try {
      // Get all Locations
      const locationData = await Locations.findAll();
  
      //map location data into new array that can be read by handlebars
      const locations = locationData.map((location) => location.get({ plain: true }));
  
      // Pass data to handlbars to render 
      res.render('locations', {locations,} );
    } catch (err) {
      res.status(500).json(err);
    }
});


//SHOW ITEMS by location 
router.get('/:location', async (req, res) => {
    try {
      // Get all items where Locations matches url param
      const itemData = await Items.findAll(
        { where: { location: req.params.location } }
      );
  
      //map item data into new array that can be read by handlebars
      const items = itemData.map((item) => item.get({ plain: true }));
  
      // Pass data to handlbars to render 
      res.render('homepage', {items,} );
    } catch (err) {
      res.status(500).json(err);
    }
});

//ONE ITEM
router.get('/items/:id', async (req, res) => {
    try {
      const itemData = await Items.findByPk(req.params.id, {
        include: [
          {
            model: Users,
            attributes: ['name'],
          },
          {
            model: Locations,
            attributes: ['name'],
          },
          {
            model: Comments,
            attributes: ['author', 'commentText'],
          },
        ],
      });
  
      const item = itemData.get({ plain: true });
  
      res.render('item', {item,});
    } catch (err) {
      res.status(500).json(err);
    }
});



//show login 
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard'); //redirect to dashboard if the user is logged in
      return;
    } 
    res.render('login');
  });
