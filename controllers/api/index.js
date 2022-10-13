const router = require('express').Router();
const userRoutes = require('./user-routes');
const requestRoutes = require("./requests");
const favouriteRoutes = require("./favourites");

router.use('/users', userRoutes);
router.use("/request", requestRoutes);
router.use("/favourites", favouriteRoutes);

module.exports = router;