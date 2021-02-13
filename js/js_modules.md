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
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
```

Another way:
```js
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};
```

### Importing
One way:
```js
\\ require via node.js
const Menu = require('./menu.js');
 
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
 
placeOrder();
```

