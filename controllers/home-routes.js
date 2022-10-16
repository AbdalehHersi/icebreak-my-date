const router = require('express').Router();
const { User, Favourite } = require("../models")
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('landing', {logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      return res.redirect('/');
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/main', async (req, res) => {
  try {
    res.render('mainpage', {logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/favorites', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Favourite }],
    });
    const favorites = userData.get({ plain: true });
    console.log("User: ", favorites)
    res.render('favourite', {
      favorites,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;