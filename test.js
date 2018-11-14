'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var thermometer = require('thermometer')
var dispatchEvent = require('dispatch-event')
var animationEvent = require('./')
var polyfill = require('./polyfill')

test('events', function (t) {
  t.plan(1)

  var render = thermometer.createComponent(Component)
  render({ onEnd: onEnd }, function (state, element, done) {
    dispatchEvent(element, 'animationend', {
      animationName: 'shake',
      elapsedTime: 1
    })
    done()
  })

  function onEnd (data) {
    t.deepEqual(data, {
      foo: 'bar',
      name: 'shake',
      time: 1
    })
  }
})

test('polyfill', function (t) {
  t.plan(1)

  polyfill('webkit')

  var render = thermometer.createComponent(Component)
  render({ onEnd: onEnd }, function (state, element, done) {
    dispatchEvent(element, 'webkitAnimationEnd', {
      animationName: 'shake',
      elapsedTime: 1
    })
    done()
  })

  function onEnd (data) {
    t.deepEqual(data, {
      foo: 'bar',
      name: 'shake',
      time: 1
    })
  }
})

function Component (data) {
  return function () {
    return data
  }
}
Component.render = function render (state) {
  return h('div', {
    'ev-animationend': animationEvent.end(state.onEnd, {
      foo: 'bar'
    }),
    'ev-webkitAnimationEnd': animationEvent.end(state.onEnd, {
      foo: 'bar'
    })
  })
}
