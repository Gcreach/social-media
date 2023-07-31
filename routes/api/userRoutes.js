const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/api/users/:userId').get(getSingleUser);

router.route('/api/users/:userId').post(createUser);

router.route('/api/users/:userId').put(updateUser);

router.route('/api/users/:userId').delete(deleteUser);

router.route('/api/users/:userId/friends/:friendId').post(addFriend);

router.route('/api/users/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;