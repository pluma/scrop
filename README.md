# Synopsis

**scrop** is a simple function for cropping sequences (arrays, strings, buffers, anything with a `slice` method) to a given length.

[![browser support](https://ci.testling.com/pluma/scrop.png)](https://ci.testling.com/pluma/scrop)

[![Build Status](https://travis-ci.org/pluma/scrop.png?branch=master)](https://travis-ci.org/pluma/scrop) [![NPM version](https://badge.fury.io/js/scrop.png)](http://badge.fury.io/js/scrop) [![Dependencies](https://david-dm.org/pluma/scrop.png)](https://david-dm.org/pluma/scrop)

# Install

## Node.js

### With NPM

```sh
npm install scrop
```

### From source

```sh
git clone https://github.com/pluma/scrop.git
cd scrop
npm install
make && make dist
```

## Browser

### With component

```sh
component install pluma/scrop
```

[Learn more about component](https://github.com/component/component).

### With bower

```sh
bower install scrop
```

[Learn more about bower](https://github.com/twitter/bower).

### With a CommonJS module loader

Download the [latest minified CommonJS release](https://raw.github.com/pluma/scrop/master/dist/scrop.min.js) and add it to your project.

[Learn more about CommonJS modules](http://wiki.commonjs.org/wiki/Modules/1.1).

### With an AMD module loader

Download the [latest minified AMD release](https://raw.github.com/pluma/scrop/master/dist/scrop.amd.min.js) and add it to your project.

[Learn more about AMD modules](http://requirejs.org/docs/whyamd.html).

### As a standalone library

Download the [latest minified standalone release](https://raw.github.com/pluma/scrop/master/dist/scrop.globals.min.js) and add it to your project.

```html
<script src="/your/js/path/scrop.globals.min.js"></script>
```

This makes the `scrop` module available in the global namespace.

# Basic usage example

```javascript
var scrop = require('scrop');

console.log(scrop([1, 2, 3], 2)); // [1, 2]
console.log(scrop('abc', 2)); // 'ab'
console.log(scrop(new Buffer([1, 2, 3]), 2)); // <Buffer 01 02>
```

# API

## scrop(arr:sequence, n:Number):sequence

Slices of the first `n` items and returns them as a new sequence.

## scrop.rcrop(arr:sequence, n:Number):sequence

Slices of the last `n` items and returns them as a new sequence.

## scrop.lcrop(arr:sequence, n:Number):sequence

Alias for `scrop`.

# Unlicense

This is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying [UNLICENSE](https://github.com/pluma/scrop/blob/master/UNLICENSE) file.