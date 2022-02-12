const router = require("express").Router();
const { Location, User, Item, Comment } = require("../models");
//const withAuth = require('../../utils/auth');

//show all items posted by user /dashboard
router.get("/:id", async (req, res) => {
  try {
    const unclaimedItemData = await Item.findAll({
      where: {
        user_id: req.params.id,
        claimed:true,
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


    const claimedData = await Item.findAll({
      where: {
        user_id: req.params.id,
        claimed:false,
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

  

    res.render("dashboard", { unclaimed, claimed, user });
  } catch (err) {
    res.status(400).json(err);
  }
});

//show the form to make a new post /dashboard/post
//later add withAuth middleware
router.get("/newitem/", async (req, res) => {
  return res.render("post", {
    user_id: req.session.user_id,
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
