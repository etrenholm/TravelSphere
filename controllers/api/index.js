const router = require('express').Router();

const groupRoutes = require('./group-routes');
const memberRoutes = require('./member-routes');
const postRoutes = require('./post-routes');
const listItemRoutes = require('./listitem-routes');
const commentRoutes = require('./comment-routes');

router.use('/groups', groupRoutes);
router.use('/members', memberRoutes);
router.use('/posts', postRoutes);
router.use('/listitems', listItemRoutes);
router.use('/comments', commentRoutes);

module.exports = router;