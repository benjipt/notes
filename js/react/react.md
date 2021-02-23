# React

## Index
- [Intro](#intro)
- [JSX](#self-closing-tags)

---

### Intro
```js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));
```
In the above `ReactDOM.render()` call, the first argument is _appended_ to whatever element is selected by the second argument.

---

### JSX

#### _class vs. className_

In HTML, it's common to use `class` as an attribute name. In JSX, you can't use the word `class`, you have to use `className` instead.

#### _self-closing tags_

In HTML, self-closing tags don't require a `/` before the final angle bracket `>`, however this is required when using JSX.

#### _conditionals_

`if` statements will not work in JSX. Must be written outside of JSX. Learn more [here](https://reactjs.org/docs/jsx-in-depth.html).

Ternary operators _will_ work on the other hand. Example here:
```js
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

`&&` conditionals will also work. Good when you want an action to be completed sometimes but other times do nothing.
```js
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

#### _`.map` in JSX_

The array method .map() comes up often in React. It’s good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first:
```js
const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>
```

### _keys_

Use keys when you make a list in JSX (like an ID).
```js
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```
