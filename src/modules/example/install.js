/**
 * This file contains all it need to make an install, uninstall or an update.
 *
 * These two functions should be exported:
 * - install
 * - uninstall
 */



/**
 * This function should creates database tables, creates cache folders if needed,
 * and do all action needed to complete installation.
 */
function install() {
    console.log('install module');
}


/**
 * This function should undo all actions done by install()
 * It means delete database tables,
 * clean all caches and destroy temporary files.
 *
 * Calling install() then uninstall() should let the system as it was before.
 */
function uninstall() {
    console.log('uninstall module');
}


module.exports = {
    install: install,
    uninstall: uninstall
};
