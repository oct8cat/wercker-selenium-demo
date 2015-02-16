'use strict';

var connect = require('connect'),
    serveStatic = require('serve-static'),
    j = require('path').join,
    PORT = process.env.PORT || 3000

module.exports = function(cb) {
    var app = connect()
    app.use(serveStatic(j(__dirname, 'public')))
    app.listen(PORT, cb)
}

if (require.main === module) {
    module.exports(function() {
        console.log('Now running on ' + PORT)
    })
}
