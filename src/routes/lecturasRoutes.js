const { Router } = require('express');
const controller = require('../controllers/lecturasController');

const router = Router();
router.post('/', controller.registrar);

module.exports = router;
