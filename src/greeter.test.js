const { test } = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("./greeter");

test("greet with a name returns Hello, <name>!", () => {
  assert.equal(greet("Mario"), "Hello, Mario!");
});

test("greet without arguments returns Hello, stranger!", () => {
  assert.equal(greet(), "Hello, stranger!");
});
