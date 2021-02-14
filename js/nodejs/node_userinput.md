# Working with user input in Node.js

## notes

```js
// via readline and process object
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
```

```js
// via prompt-sync
const prompt = require('prompt-sync')();
 
const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
```