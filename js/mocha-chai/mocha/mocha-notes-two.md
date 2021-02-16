# Mocha

## Index

### `assert.equal` and `assert.strictEqual`
```js
const a = 3;
const b = '3';
assert.equal(a, b); // no error thrown
assert.strictEqual(a, b); // error is thrown
```

### `assert.deepEqual`
```js
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b); // error thrown
assert.strictEqual(a, b); // error thrown
```
Both assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript.

If you need to compare the values within two objects, you can use assert.deepEqual(). This method compares the values of each object using loose (==) equality.
```js
assert.deepEqual(a, b); // will not throw error
```
Works on arrays & objects:
```js
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, '3'];
 
assert.deepEqual(arr1, arr2); // No error
assert.deepEqual(arr1, arr3); // No error
```

Other assert methods can be found in the Node.js [documentation](https://nodejs.org/api/assert.html).