# Javascript Classes

## Index
- [Constructor Method](#constructor-method)
- [Getter Method](#getter-method)
- [Inheritance](#inheritance)
- [Static Methods](#static-methods)

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
    // super keyword calls the constructor of the parent class.
    super(name);
    // _usesLitter is unique to cat class, so we set it here.
    this._usesLitter = usesLitter;
  }
}
```
<br>

### Static Methods
Sometimes you will want a class to have methods that aren't available in individual instances, but that you can call directly from an instance of the class.
```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}

// method call is appended to the Animal class rather than instance of class.
console.log(Animal.generateName());
```
