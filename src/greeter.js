// Modulo seed per i test degli agenti.
// Contiene un bug volontario (saluto in maiuscolo invece che capitalize)
// e nessun test, così gli agenti hanno materiale su cui operare.

/**
 * Restituisce un saluto personalizzato.
 * @param {string} name - Il nome della persona da salutare.
 * @returns {string} La stringa di saluto.
 */
function greet(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return "HELLO, " + name + "!";
}

module.exports = { greet };
