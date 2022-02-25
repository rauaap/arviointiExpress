const routerFactory = require('./routerFactory')
const arviointi = require('../models/arviointi_model');

router = routerFactory(arviointi)

module.exports = router;
