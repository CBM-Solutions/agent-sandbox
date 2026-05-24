// Modulo seed per i test degli agenti.
// Contiene un bug volontario (saluto in maiuscolo invece che capitalize)
// e nessun test, così gli agenti hanno materiale su cui operare.

function greet(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return "HELLO, " + name + "!";
}

module.exports = { greet };
