/**
 * This module is an example module, useful as a documentation
 * as well as a template for creating new module.
 *
 *
 * This file is the entry point of the module.
 * All function defined here are public. They should be perfectly documented,
 * and can be call ba any other module or services.
 *
 * All functions that are NOT exposed here are internal to the module,
 * and should never be called elsewhere.
 *
 * A module can exports any kind of function (or objects) with any name.
 * However, there are two special name with particular meaning: start and stop.
 * See bellow
 */



/**
 * This method is called when the module start.
 *
 * It the place for load all resources, recover data and initialize it.
 *
 * If the module uses some front controllers,
 * it needs to register all callback methods here.
 */
function start() {
    console.log('start module');
}


/**
 * It's the opposite to the start() function:
 * This one should properly save all data,
 * release all resources and stop completely.
 * It's expected than using start() then stop() let the game in the same state.
 *
 * Usually, most of the resources are already saved,
 * so we just have to unsubscribe methods from controllers.
 */
function stop() {
    console.log('stop module');
}


/**
 * Example of public method
 *
 * If the method as more than a dozen lines of code,
 * then it should put in another file, and imported using require();
 *
 * @param {Number} number
 * @return {Number} the square result
 */
function square(number) {
    return number * number;
}


/**
 * Export are done here.
 * So we have the exact list of methods and attributes exported.
 */
module.exports = {
    start: start,
    stop: stop,
    square: square
};
