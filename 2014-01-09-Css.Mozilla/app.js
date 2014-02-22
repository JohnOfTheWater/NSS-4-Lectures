var connect = require('connect');

connect.createServer(
    connect.static(__dirname + '/public1')
    ).listen(3001)

