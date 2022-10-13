const router = require("express").Router();
const session = require("express-session");
const Favourite = require("../../models/Favourite");

router.post("/", async (req, res) => {

  try {
    const favourite = await Favourite.create({
      user_id: req.session.user_id,
      description: req.body.favourite,
    });

    res.status(200).json(favourite);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
