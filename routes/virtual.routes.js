const express = require('express');
const virtualController = require('../controllers/virtual.controller');
const router = express.Router();

router.route('/')
    .get(virtualController.getAll)
    //.post(augmentedController.save);

router.route('/:image_id')
    .get(virtualController.getByMarkerID)



module.exports = router;