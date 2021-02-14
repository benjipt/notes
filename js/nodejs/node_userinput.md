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

```js
// Allows users to exit program with ^c
const prompt = require('prompt-sync')({sigint: true});
```

```js
// Convert user input to number
const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);
```

More on [Codecademy]('https://www.codecademy.com/articles/getting-user-input-in-node-js')