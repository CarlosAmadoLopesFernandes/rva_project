const express = require('express');
const augmentedController = require('../controllers/augmented.controller');
const router = express.Router();

router.route('/')
    .get(augmentedController.getAll)
    .post(augmentedController.save);

router.route('/:marker_id')
    .get(augmentedController.getByMarkerID)
    .put(augmentedController.update);



module.exports = router;