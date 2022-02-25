const routerFactory = require('./routerFactory')
const opiskelija = require('../models/opiskelija_model');

router = routerFactory(opiskelija)

module.exports = router;
