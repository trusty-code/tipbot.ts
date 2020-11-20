# IOTA TipBot JS Library

## How to use

```bash
npm install @trustify/tipbot.ts
```

### Add
```javascript
const tipbot = require('@trustify/tipbot.ts');

let response = await tipbot.add("Felix", "HYMYMBXAWOTQSSCMUHLTEZM9ODBRQHQXE9YYITUIQKTLMIKHMUTSETAQIFRCNKIVFNEETSXDNHAYHYSVCHPXUVQDMX")

console.log(response)

// -> Address added.
```

### Tip
```javascript
const tipbot = require('@trustify/tipbot.ts');

let response = await tipbot.tip("Felix");

console.log(response)

// -> HYMYMBXAWOTQSSCMUHLTEZM9ODBRQHQXE9YYITUIQKTLMIKHMUTSETAQIFRCNKIVFNEETSXDNHAYHYSVCHPXUVQDMX
```

## How to develop

Clone the repo and link it with npm

```bash
git clone https://github.com/trusty-code/tipbot.ts
cd tipbot.ts
npm link
```

now you can link it to your bot implementation 

```bash
cd your/bot/path
npm link @trustify/tipbot.ts
```
