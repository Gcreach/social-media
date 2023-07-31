const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtControllers');

router.route('/').get(getThoughts).post(createThought);

router.route('/api/thoughts/:thoughtId').get(getSingleThought);

router.route('/api/thoughts/:thoughtId').post(createThought);

router.route('/api/thoughts/:thoughtId').put(updateThought);

router.route('/api/thoughts/:thoughtId').delete(deleteThought);

router.route('/api/thoughts/:thoughtId/reactions').post(createReaction);

router.route('/api/thoughts/:thoughtId/reactions').delete(deleteReaction);

module.exports = router;