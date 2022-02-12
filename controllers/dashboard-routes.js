const router = require("express").Router();
const { Location, User, Item, Comment } = require("../models");
const withAuth = require('../utils/auth');

//show all items posted by user /dashboard
router.get("/:id", async (req, res) => {
  try {
    console.log("user id:");
    console.log(req.params.id);
    const unclaimedItemData = await Item.findAll({
      where: {
        user_id: req.params.id,
        claimed: false,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Location,
          attributes: ["location"],
        },
        {
          model: Comment,
          attributes: ["content"],
        },
      ],
    });
    const unclaimed = unclaimedItemData.map((item) => item.get({ plain: true }));
    
    console.log("unclaimed");
    console.log(unclaimed);

    const claimedData = await Item.findAll({
      where: {
        user_id: req.params.id,
        claimed: true,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Location,
          attributes: ["location"],
        },
        {
          model: Comment,
          attributes: ["content"],
        },
      ],
    });

    const claimed = claimedData.map((item) => item.get({ plain: true }));

    console.log("claimed");
    console.log(claimed);

    //USER get data
    const userData = await User.findByPk(req.params.id);
    const user = userData.get({ plain: true });

    console.log("user");
    console.log(user);


    res.render('dashboard', {
      user_id: req.params.id,
      logged_in: req.session.logged_in, 
      unclaimed, claimed, user
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//show the form to make a new post /dashboard/post
//later add withAuth middleware
router.get("/:id/newitem/", async (req, res) => {
  try {
    //USER get data
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Location,
          attributes: ["location"],
        },
      ],
    });
    const user = userData.get({ plain: true });

    return res.render("post", {
      user,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
