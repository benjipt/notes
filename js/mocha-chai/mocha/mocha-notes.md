# Mocha

## Index
- [Installing Mocha I](#installing-mocha-i)
- [Installing Mocha II](#installing-mocha-ii)

## Installing Mocha I:
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

## Installing Mocha II
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