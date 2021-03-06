/**
 * Entry point of Discordus
 *
 * This file load all, in order:
 * - All services, like the log service, the database, etc.
 * - All front controllers, which can start reading on network
 * - All modules. They will register from controllers.
 */



console.log('Starting Discordus ...');

var services = [
];

var controllers = [
    'Websocket'
];

var modules = [
    'example'
];


controllers.forEach(function(path) {
    var controller = require('./src/controllers/' + path);
    controller.start();
});

modules.forEach(function(path) {
    var module = require('./src/modules/' + path);
    module.start();
});


console.log('Start done !');
