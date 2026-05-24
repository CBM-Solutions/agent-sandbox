// Modulo seed per i test degli agenti.
// Contiene un bug volontario (saluto in maiuscolo invece che capitalize)
// e nessun test, così gli agenti hanno materiale su cui operare.

const DEFAULT_GREETING = "Hello, stranger!";
const GREETING_TEMPLATE = (name) => `HELLO, ${name}!`;

function greet(name) {
  if (!name) {
    return DEFAULT_GREETING;
  }
  return GREETING_TEMPLATE(name);
}

module.exports = { greet, DEFAULT_GREETING, GREETING_TEMPLATE };
