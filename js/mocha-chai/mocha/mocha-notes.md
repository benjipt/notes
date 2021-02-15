# Mocha

## Index
- [Installing Mocha I](#installing-mocha-i)
- [Installing Mocha II](#installing-mocha-ii)
- [desribe and it blocks](#describe-and-it-blocks)
- [assert](#assert)
- [Setup, Exercise, and Verify](#)
- [Teardown](#teardown)


### Installing Mocha I:
In project repo, `$ npm init` to create a package.json that can be used to manage packages for the project.
```
$ npm init
```

After running this command you will be prompted to enter information about your project. It's okay to skp some fields if you're not ready to enter that information.

With your project setup, you can install packages.
```
$ npm install mocha -d
```
`-D` notes that this package is a dependency for your project, which makes it easier for other developers to use.

Once you `npm install` packages, you can find the packages and all their dependencies in the **node_modules** folder. The new directory structure contains the following:
```
project
|_ node_modules
|___ .bin
|___ mocha
|___ ...
|_ package.json
```
The `...` in the file structure represents other packages that are a dependency for Mocha.

### Installing Mocha II
After installing MOcha as a dependency we can run it in two ways.
The first *and more tedious) method is to call it directly from **node_modules**:
```
$ ./node_modules/mocha/bin/mocha
```

The second (and recommended) method is to add a script to **package.json**. In the `scripts` object in **package.json**, set th evalue of `"test"` to `mocha`. It should look like this:
```
"scripts": {
  "test": "mocha"
}
```

Now you can call Mocha with the following command:
```
$ npm test
```

### describe and it blocks
In Mocha we group tests using the describe function and define tests using the it function. These two functions can be used to make your test suite complete, maintainable, and expressive in the following ways:

- Structure your test suite: you can organize tests into nested groups that reflect the structure of your implementation code.

- Provide informative messages: you can define your tests using human-readable strings.

If you are testing a Math object with the method .max, you could use the following test code.
```js
describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});
```

Both the describe and it functions accept two parameters: a descriptive string and a callback function. Though the functions are flexible, they are commonly used in the structure above: nest describe blocks to resemble the structure of your implementation code and write individual tests in it blocks. This makes your test suite isolated, maintainable, and expressive.

### assert
`assert.ok()` allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite.

As a Node module, assert can be imported at the top of your files with
```js
const assert = require('assert');
```

You call `assert` functions like this:
```js
assert.ok(a === 3);
```
In this case a === 3 evaluates to true, so no error is thrown.

If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.

### Setup, Exercise, and Verify
The phases are defined as follows:

- Setup - create objects, variables, and set conditions that your test depends on
- Exercise - execute the functionality you are testing
- Verify - check your expectations against the result of the exercise phase. You can use the assert library here

Clearly separating each phase makes a test easier to read, change, and validate.

### Teardown
Some tests require a fourth phase called _teardown_. This step makes your test _isolated_.
- _Teardown_ - reset any conditions that were changed during the test

A test, like the example in this exercise, can make changes to its environment that could affect other tests. The teardown phase is used to reset the environment before the next test runs.

Some common changes to an environment include
- altering files and directory structure
- changing read and write permissions on a file
- editing records in a database

In some cases - the _teardown_ phase isn't needed because there are no conditions to reset.