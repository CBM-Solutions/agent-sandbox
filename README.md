# agent-sandbox
Sandbox per testare gli agenti Claude attivati via etichette agent:*

## API — `src/greeter.js`

### `formatGreeting(name, locale)`

Restituisce una stringa di saluto localizzata.

| Parametro | Tipo | Descrizione |
|---|---|---|
| `name` | `string` | Nome della persona da salutare |
| `locale` | `string` | Locale desiderato (`"it"` o `"en"`). Qualsiasi valore non riconosciuto fa fallback su `"en"`. |

**Esempio:**

```js
const { formatGreeting } = require('./src/greeter');

formatGreeting('Mario', 'it'); // → "Ciao, Mario!"
formatGreeting('Alice', 'en'); // → "Hello, Alice!"
formatGreeting('Bob', 'fr');   // → "Hello, Bob!"  (fallback en)
```
