// Modulo seed con vulnerabilità VOLONTARIE per testare agent:security.
// NON usare in produzione.

const DB_PASSWORD = "SuperSecret123!"; // secret hardcoded (volontario)

// SQL injection: concatenazione diretta dell'input nella query
function findUserByName(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.exec(query);
}

// Comando shell costruito da input non validato (command injection)
function pingHost(host) {
  const { execSync } = require("child_process");
  return execSync("ping -c 1 " + host).toString();
}

module.exports = { findUserByName, pingHost, DB_PASSWORD };
