'use strict'

var BaseEvent = require('value-event/base-event')
var Delegator = require('dom-delegator')
var extend = require('xtend')
var events = require('./events.json')

var delegator = Delegator()

module.exports = events.reduce(function (acc, event) {
  acc[event] = BaseEvent(handleAnimation)
  return acc
}, {})

events.forEach(function (event) {
  delegator.listenTo('animation' + event)
})

function handleAnimation (event, broadcast) {
  var data = extend({
    name: event._rawEvent.animationName,
    time: event._rawEvent.elapsedTime
  }, this.data)
  broadcast(data)
}
