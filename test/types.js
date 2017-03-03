/* eslint new-cap: ["error", { "capIsNew": false }] */
import test from 'ava';
import Window from '../';

test('Window is a class', t => {
	t.throws(() => Window());
	t.notThrows(() => new Window());
});
