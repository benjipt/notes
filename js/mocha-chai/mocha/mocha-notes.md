# Mocha

## Index
- [Installing Mocha I](#installing-mocha-i)
- [Installing Mocha II](#installing-mocha-ii)
- [desribe and it blocks](#describe-and-it-blocks)


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