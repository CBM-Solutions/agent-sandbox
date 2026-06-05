'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { formatGreeting } = require('./greeter.js');

test('formatGreeting - locale it', () => {
  assert.equal(formatGreeting('Mario', 'it'), 'Ciao, Mario!');
});

test('formatGreeting - locale en', () => {
  assert.equal(formatGreeting('Alice', 'en'), 'Hello, Alice!');
});

test('formatGreeting - locale sconosciuto fallback su en', () => {
  assert.equal(formatGreeting('Alice', 'fr'), 'Hello, Alice!');
});
