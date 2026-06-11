// Modulo seed per i test degli agenti.
// Contiene un bug volontario (saluto in maiuscolo invece che capitalize)
// e nessun test, così gli agenti hanno materiale su cui operare.

function buildGreeting(salutation, name) {
  return `${salutation}, ${name}!`;
}

function greet(name) {
  if (!name) {
    return buildGreeting("Hello", "stranger");
  }
  return buildGreeting("HELLO", name);
}

const GREETINGS = {
  it: "Ciao, ",
  en: "Hello, ",
};

function formatGreeting(name, locale) {
  const prefix = GREETINGS[locale] || GREETINGS.en;
  return prefix + name + "!";
}

module.exports = { greet, formatGreeting };
