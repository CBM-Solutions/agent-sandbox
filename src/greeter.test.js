const { test } = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("./greeter");

test("greet() returns default greeting when no name is given", () => {
  assert.equal(greet(), "Hello, stranger!");
});

test("greet(null) returns default greeting", () => {
  assert.equal(greet(null), "Hello, stranger!");
});

test("greet(name) returns uppercased greeting with name", () => {
  assert.equal(greet("Alice"), "HELLO, Alice!");
});
