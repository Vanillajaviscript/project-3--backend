const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl');

//INDUCES

router.get('/', productCtrl.index);
router.get('/:id', productCtrl.show);
router.put('/:id', productCtrl.update);
router.post('/', productCtrl.create);
router.delete('/:id', productCtrl.delete);

module.exports = router;