# window

> Exports a [`jsdom`](https://github.com/tmpvar/jsdom) window object.

[![Build Status](https://travis-ci.org/lukechilds/window.svg?branch=master)](https://travis-ci.org/lukechilds/window) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/window/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/window?branch=master) [![npm](https://img.shields.io/npm/dm/window.svg)](https://www.npmjs.com/package/window)

Exports a jsdom window object. This is useful for enabling browser modules to run in Node.js or testing browser modules in any Node.js test framework.

## Install

```shell
npm install --save window
```

Or if you're just using for testing you'll probably want:

```shell
npm install --save-dev window
```

## Usage

```js
const Window = require('window');

const window = new Window();

const div = window.document.createElement('div');
// HTMLDivElement

div instanceof window.HTMLElement
// true
```

Because `window` is just a normal JavaScript object it can be used more efficiently with object destructuring.

```js
const { document } = new Window();

document.body.innerHTML = '<div class="foo">Hi!</div>';
document.body.querySelector('.foo').textContent;
// Hi!
```

## License

MIT © Luke Childs
