# Javascript Classes

## Index
- [Constructor Method](#constructor-method)
- [Getter Method](#getter-method)
- [Inheritance](#inheritance)

---

## Notes

### Constructor Method
In order to instantiated, a class must have a _constructor method_.
```js
class Dog {
    // Constructor Method
    constructor(name) {
        this.name = name;
    }
}
```

To create an instance of Class:
```js
const halley = new Dog('Halley');
console.log(halley.name); // prints 'Halley'
```
<br>

### Getter Method
```js
class Dog {
   constructor(name) {
    this._name = name;
   }
   
   // Getter Method
   get name() {
    return this._name;
  }
}
```
<br>

### Inheritance
Extending a parent class:
```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    // super keyword calls the constructor of the parent class
    super(name);
    this._usesLitter = usesLitter;
  }
}
```
<br>

