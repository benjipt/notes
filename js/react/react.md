# React

## Index
- [Intro](#intro)
- [JSX](#self-closing-tags)
- [Component Classes](#component-classes)
- [Component Lifecycle](#component-lifecycle)
- [Function Components](#function-components)

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

#### _keys_

Use keys when you make a list in JSX (like an ID).
```js
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

---

### Component Classes
```js
import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

A `render()` function must have a `return` statement. However, that isn't all that it can have. A `render()` function can also be a fine place to put simple calculations that need to happen right before a component renders.

#### Passing State Change Functions as Props
```js
class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
  }
 
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
 
  render() {
    return (
      <div>
        <input onChange={this.handleNameChange} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
```
In this example, because this.setState() causes the Name component to re-render, any change to the `input` will update the Name component’s state, causing a new render and displaying the new state value to the `p` tag content.

#### Event Handlers and State in React
```js

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
 
  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.text} />
        <p>You typed {this.state.text}</p>
      </div>
    );
  }
}
```
In the example code, we use event.target.value to get the input’s value.

#### Using Stateless Updaters and Presenters
```js
class StatefulParent extends React.Component {
  constructor(props) {
    super(props);
    // Set up initial state here
    // Bind handler functions here
  }
 
  handlerMethod(event) {
    // Update state here
  }
 
  render() {
    return (
      <div>
        <InputComponent onChange={handler} />
        <DisplayComponent valueToDisplay={this.state.valueToDisplay} />
      </div>
    );
  }
}
```
A common React programming pattern is to use a parent stateful component to manage state and define state-updating methods. Then, it will render stateless child components.

One or more of those child components will be responsible for updating the parent state (via methods passed as props). One or more of those child components will be responsible for displaying that state.

In the example code, StatefulParent renders `InputComponent` to change its state and uses `DisplayComponent` to display it.

---

### Component Lifecycle
The component lifecycle has three high-level parts:

1. Mounting, when the component is being initialized and put into the DOM for the first time
2. Updating, when the component updates as a result of changed state or changed props
3. Unmounting, when the component is being removed from the DOM

The order is:
1. The constructor
2. `render()`
3. `componentDidMount()`
4. `componentDidUpdate()`
5. `componentWillUnmount()`

---

### Function Components
```js
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
```
To access `props`, give your function component a parameter named `props`.