
var socket_io = require('socket.io');

/**
 * instance of Socket.io server.
 * @private
 */
var _socket = null;


/**
 * Start the Socket.io server on the port 3000
 */
function start() {
    _socket = socket_io.listen(3000);
}


/**
 * Stop the Socket.io server.
 */
function stop() {
    _socket.engine.close();
    _socket = null;
}


/**
 * Return a socket with a namespace.
 * @param {String} namespace
 */
function getSocket(namespace) {
    return _socket.of(namespace);
}


module.exports = {
    start: start,
    stop: stop,
    getSocket: getSocket
};
