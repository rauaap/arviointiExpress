const routerFactory = require('./routerFactory')
const opintojakso = require('../models/opintojakso_model');

router = routerFactory(opintojakso)

module.exports = router;
