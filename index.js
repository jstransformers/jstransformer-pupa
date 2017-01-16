'use strict'

var pupa = require('pupa')
var extend = require('extend-shallow')

exports.name = 'pupa'
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  var data = extend({}, options, locals)
  return pupa(str, data)
}
