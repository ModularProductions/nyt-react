const router = require("express").Router();
const headlineRoutes = require("./headlines");
// const commentRoutes = require("./comments");

// Headline routes
router.use("/headlines", headlineRoutes);
// router.use("/comments", commentRoutes);

module.exports = router;