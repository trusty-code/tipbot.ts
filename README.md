# IOTA TipBot JS Library

# How to use

```bash
npm install @trustify/tipbot.ts
```

```javascript
const tipbot = require('@trustify/tipbot.ts');

let response = await tipbot.add("Felix", "HYMYMBXAWOTQSSCMUHLTEZM9ODBRQHQXE9YYITUIQKTLMIKHMUTSETAQIFRCNKIVFNEETSXDNHAYHYSVCHPXUVQDMX")

console.log(response)

// -> Address added.
```