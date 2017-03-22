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
// "Hi!"
```

### Config

You can also pass a jsdom config object that will be passed along to the underlying jsdom instance.

```js
const jsdomConfig = { userAgent: 'Custom UA' };
const window = new Window(jsdomConfig);

window.navigator.userAgent;
// "Custom UA"
```

## Universal Testing Pattern

You can use a really simple pattern to enable your browser modules to run in Node.js with `window`. Just allow a window object to be passed in to your module and prepend any references to browser globals with `win`. Set `win` to the passed in window object if it exists, otherwise fallback to global `window`.

```js
module.exports = function(text, win) {
  win = win || window;

  win.document.body.innerHTML = `<h1>${text}</h1>`;
  return window.document.querySelector('h1');
};
```

Browser usage:

```js
module('Hi');
// <h1>Hi</h1>
```

Node.js usage:

```js
module('Hi', new Window());
// <h1>Hi</h1>
```



## License

MIT © Luke Childs
