'use strict'

const pupa = require('pupa')
const extend = require('extend-shallow')

exports.name = 'pupa'
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const data = extend({}, options, locals)
  return pupa(str, data)
}
