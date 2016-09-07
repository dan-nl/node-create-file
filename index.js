'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var path = require( 'path' );
var Promise = require( 'bluebird' );

/**
 * uses node’s fs.writeFile to create the file, returning a Promise that will resolve with boolean `true` or reject with the fs `Error`
 *
 * @link https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
 *
 * @param {string|buffer} file_path_name
 * @param {string|buffer} data
 * @param {Object|string} [options]
 *
 * @returns {Promise}
 */
module.exports = function createFile( file_path_name, data, options ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function ( resolve, reject ) {
      fs.writeFile(
        file_path_name,
        data,
        options,
        /**
         * @param {Error} err
         */
        function callback( err ) {
          if ( err ) {
            reject( err );
          }

          resolve( true );
        }
      );
    }
  );
};
