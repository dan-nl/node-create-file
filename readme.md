## createFile( filepath_name, data, options )
uses node’s fs.writeFile to create the file, returning a Promise that will resolve with boolean `true` or reject with the fs `Error`.
```javascript
@link https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
@param {string|buffer} filepath_name
@param {string|buffer} data
@param {Object|string} [options]
@returns {Promise}
```
