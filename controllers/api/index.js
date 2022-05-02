const router = require('express').Router();

const tripRoutes = require('./trip-routes');
const memberRoutes = require('./member-routes');
const postRoutes = require('./post-routes');
const listItemRoutes = require('./listitem-routes');
const commentRoutes = require('./comment-routes');

router.use('/trips', tripRoutes);
router.use('/members', memberRoutes);
router.use('/posts', postRoutes);
router.use('/listitems', listItemRoutes);
router.use('/comments', commentRoutes);

module.exports = router;