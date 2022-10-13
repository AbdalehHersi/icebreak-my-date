const router = require('express').Router();
const Favorite = require("../models/Favourite")
const User = require('../models/User');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('landing');
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
    res.render('mainpage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/favourites', async (req, res) => {
  try {
    res.render('favourites');
  } catch (err) {
    res.status(500).json(err);
  }
});




// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;