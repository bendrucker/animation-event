# animation-event [![Build Status](https://travis-ci.org/bendrucker/animation-event.svg?branch=master)](https://travis-ci.org/bendrucker/animation-event)

> value-event handlers for CSS animation events


## Install

```
$ npm install --save animation-event
```


## Usage

```js
var animationEvent = require('animation-event')
var h = require('virtual-dom/h')

h('div', {
  'ev-animationend': animationEvent.end(animationEndHandler)
})
```

## API

#### `animationEvent.start(handler, [data])` -> `function`
#### `animationEvent.iteration(handler, [data])` -> `function`
#### `animationEvent.end(handler, [data])` -> `function`

##### handler

*Required*  
Type: `function`

The handler to call when the element receives the specified animation event.

##### data

Type: `object`  
Default: `{}`

Data to pass to the handler. This will be extended with:

###### name

Type: `string`

The animation name read from the event's `animationName`.

###### time

Type: `number`

The animation duration in seconds, read from the event's `elapsedTime`.


## License

MIT © [Ben Drucker](http://bendrucker.me)
