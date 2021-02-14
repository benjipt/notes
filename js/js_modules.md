# Javascript Modules

## Index
- [Exporting](#exporting)
- [Importing](#importing)

---

## Notes

JavaScript _modules_ ar reusable pieces of code that can be exported from one program and imported for use in another program.

Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:
- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep information private and protected from other modules;
- and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

### Exporting
One way:
```js
// via node.js
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
```

Another way:
```js
// via node.js
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};
```

Default export:
```js
// via ES6
let Menu = {};
 
export default Menu;
```

Named export:
```js
// via ES6
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
 
export { specialty, isVegetarian };
```
_Or..._
```js
// via ES6
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
};
```

w/ `as` keyword:
```js
// via ES6
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```

When using ES6 syntax, we use export default in place of module.exports. Node.js doesn’t support export default by default, so module.exports is usually used for Node.js development and ES6 syntax is used for front-end development.

### Importing
One way:
```js
// via node.js
const Menu = require('./menu.js');
 
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
 
placeOrder();
```

Another way:
```js
// via ES6
import Menu from './menu';
```

Named import:
```js
// via ES6
import { specialty, isVegetarian } from './menu';
```

w/ `as` keyword:
```js
// via ES6
import {isLowSodium as saltFree} from './Menu';

||

import * as Carte from './menu'
```