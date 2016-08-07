'use strict';

/**
 * module dependencies
 */
var fileExists = require( 'node-file-exists' );
var fs = require( 'fs' );
var path = require( 'path' );
var Promise = require( 'bluebird' );

/**
 * uses node’s fs.writeFile to create the file, returning a Promise that will resolve with boolean `true` or reject with the fs `Error`
 *
 * @link https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
 *
 * @param {string|buffer} filepath_name
 * @param {string|buffer} data
 * @param {Object|string} [options]
 *
 * @returns {Promise}
 */
module.exports = function createFile( filepath_name, data, options ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function ( resolve, reject ) {
      fs.writeFile(
        filepath_name,
        data,
        options,
        /**
         * @param {Error} err
         */
        function ( err ) {
          if ( err ) {
            reject( err );
          }

          resolve( true );
        }
      );
    }
  );
};