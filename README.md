# jstransformer-pupa

[pupa](https://github.com/sindresorhus/pupa) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-pupa/master.svg)](https://travis-ci.org/jstransformers/jstransformer-pupa)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-pupa/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-pupa)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-pupa/master.svg)](http://david-dm.org/jstransformers/jstransformer-pupa)
[![NPM version](https://img.shields.io/npm/v/jstransformer-pupa.svg)](https://www.npmjs.org/package/jstransformer-pupa)

## Installation

    npm install jstransformer-pupa

## API

```js
var pupa = require('jstransformer')(require('jstransformer-pupa'));

pupa.render('Hello, {name}!', {name: 'World'}).body
//=> 'Hello, World!'
```

## License

MIT
