const router = require("express").Router();
const { User } = require("../../models");

//API route to login - posts new information to session data
router.post("/login", async (req, res) => {

    //console.log(req.body);

    const userData = await User.findOne({
      where: { name: req.body.name },
    });

    console.log(userData);

    if (!userData) {
      res
        .status(400)
        .json({ message: "Wrong username or password, please try again!" });
      return;
    }

   const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Wrong username or password, please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
 
});

//route to create a new user and login 
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


//LOGOUT by destroying seesion cookies 
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;

