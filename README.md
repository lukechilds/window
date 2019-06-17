# window

> Exports a [`jsdom`](https://github.com/tmpvar/jsdom) window object.

[![Build Status](https://travis-ci.org/lukechilds/window.svg?branch=master)](https://travis-ci.org/lukechilds/window)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/window/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/window?branch=master)
[![npm](https://img.shields.io/npm/dm/window.svg)](https://www.npmjs.com/package/window)
[![npm](https://img.shields.io/npm/v/window.svg)](https://www.npmjs.com/package/window)

Exports a jsdom window object. This is useful for enabling browser modules to run in Node.js or testing browser modules in any Node.js test framework.

Requires Node.js v6 or newer, use `window@3` to support older Node.js versions.

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

You can use a really simple pattern to enable your browser modules to run in Node.js. Just allow a window object to be passed in to your module and prepend any references to browser globals with `win`. Set `win` to the passed in window object if it exists, otherwise fallback to global `window`.

```js
function createTitle(text, win) {
  win = win || (typeof window === 'undefined' ? undefined : window);

  const title = win.document.createElement('h1');
  title.innerHTML = text;
  return title;
};

module.exports = createTitle;
```

Browser usage:

```js
createTitle('Hi');
// <h1>Hi</h1>
```

Node.js usage:

```js
const window = new Window();

createTitle('Hi', window);
// <h1>Hi</h1>
```

Obviously you don't need to follow this exact pattern, maybe you already have an options object and you only need `document` not the entire window object:

```js
function createTitle(text, opts = {}) {
  const doc = opts.document || window.document;

  const title = doc.createElement('h1');
  ...
```

You can see an example of this pattern in `lukechilds/create-node`. Specifically [src/create-node.js](https://github.com/lukechilds/create-node/blob/master/src/create-node.js) and  [test/unit.js](https://github.com/lukechilds/create-node/blob/master/test/unit.js).

## What about dependencies?

Sometimes you may have dependencies that you can't pass a window object to. In that scenario you can alternatively use [`browser-env`](https://github.com/lukechilds/browser-env) which will simulate a global browser environment.

## License

MIT © Luke Childs
