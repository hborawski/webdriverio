/**
 *
 * protocol bindings for all mobile orientation operations
 *
 * ### Usage
 *
 *     // get the current browser orientation. The server should
 *     // return a valid orientation value as defined in
 *     // ScreenOrientation: {LANDSCAPE|PORTRAIT}
 *     client.orientation(function(err,res) { ... });
 *
 *     // set the browser orientation. The orientation should be
 *     // specified as defined in ScreenOrientation: {LANDSCAPE|PORTRAIT}
 *     client.orientation('landscape');
 *
 * @param {String=} deviceOrientation  The new browser orientation as defined in ScreenOrientation: `{LANDSCAPE|PORTRAIT}`
 * @returns {String}                   device orientation (`{LANDSCAPE|PORTRAIT}`)
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/orientation
 *
 */

module.exports = function orientation (deviceOrientation) {
    var data = {};

    if (typeof deviceOrientation === 'string') {
        data.orientation = deviceOrientation.toUpperCase();
    }

    this.requestHandler.create(
        '/session/:sessionId/orientation',
        data,
        arguments[arguments.length - 1]
    );
};