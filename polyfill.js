'use strict'

var Delegator = require('dom-delegator')
var array = require('cast-array')
var partial = require('ap').partial
var delegator = Delegator()
var events = require('./events.json')

module.exports = polyfill

function polyfill (prefixes) {
  prefixes = array(prefixes)

  prefixes.forEach(function (prefix) {
    if (prefix === 'ms') prefix = 'MS'
    events.forEach(partial(proxy, prefix))
  })
}

function proxy (prefix, event) {
  var prefixed = event = prefix + 'Animation' + capitalize(event)
  if (prefix === 'o') prefixed = event.toLowerCase()
  delegator.listenTo(prefixed)
}

function capitalize (string) {
  return string[0].toUpperCase() + string.substring(1)
}
