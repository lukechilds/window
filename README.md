# window

> Exports a [`jsdom`](https://github.com/tmpvar/jsdom) window object.

[![Build Status](https://travis-ci.org/lukechilds/window.svg?branch=master)](https://travis-ci.org/lukechilds/window) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/window/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/window?branch=master) [![npm](https://img.shields.io/npm/dm/window.svg)](https://www.npmjs.com/package/window)

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
import Window from 'window';

const window = new Window();

const div = window.document.createElement('div');
// HTMLDivElement

div instanceof window.HTMLElement
// true
```

## License

MIT © Luke Childs
