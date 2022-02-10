const router = require('express').Router();
const { Location, User, Item, Comment}  = require('../models/');
//const withAuth = require('../../utils/auth');


//show all items posted by user /dashboard
router.get('/', async (req, res) => {
    try{
        const itemData = await Item.findAll({
            where: {
              user_id: req.session.user_id,
            }, 
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
                {
                  model: Location,
                  attributes: ['city'],
                },
                {
                  model: Comment,
                  attributes: [ 'content'],
                },
              ],
        });

        const items = itemData.map((items) => 
          article.get({ plain: true })
        );

        res.render('dashboard', {
          items: items, 
          user_id: req.session.user_id, 
        });
    }
    catch (err) {
        res.status(400).json(err); 
    }
});


//show the form to make a new post /dashboard/post 
//later add withAuth middleware
router.get('/newitem/', async (req, res) => {
  return res.render('post', {
    user_id: req.session.user_id, 
    logged_in: req.session.logged_in });
});