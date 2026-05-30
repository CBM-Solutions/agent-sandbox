const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./greeter');

test('greet senza nome restituisce saluto generico', () => {
  assert.strictEqual(greet(), 'Hello, stranger!');
});

test('greet con stringa vuota restituisce saluto generico', () => {
  assert.strictEqual(greet(''), 'Hello, stranger!');
});

test('greet con nome restituisce saluto personalizzato', () => {
  assert.strictEqual(greet('Alice'), 'HELLO, Alice!');
});
