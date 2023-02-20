# lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Kevin Cogen as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kevincogen/lotide`

**Require it:**

`const _ = require('@kevincogen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Asserts deep equality between two Arrays 
* `assertEqual(...)`: Asserts strict equality between two inputs
* `assertObjectsEqual(...)`: Assets equalit between two Objects
* `countLetters(...)`: counts Letters in a given input and outputs Object that lists each Letter and Letter Count
* `countOnly(...)`: takes in a collection of items and return counts for a specific subset of those items.
* `eqArrays(...)`: compares two arrays
* `eqObjects(...)`: compares two objects
* `findKey(...)`: scans an object and returns first key which contains a value that returns true with callback function
* `findKeyByValue(...)`: scans an object and returns the first key which contains a given value
* `flatten(...)`: take in Array, including nested Array, and return a flattened Array
* `head(...)`: take in Array, return array with only first item.
* `letterPositions(...)`: takes in a string, converts to an array and returns an object that lists each index location of each letter used.
* `map(...)`: takes in array to map and callback function - returns a new array based on results of callback function
* `tail(...)`: takes in an array and returns a new array with first element removed
* `middle(...)`: takes in an array and returns a new array with only the middle most element(s)
* `takeUntil(...)`: takes in an array and a predicate - returns a slice of the array with elements taken from the beginning, until the predicate returns true.
* `without(...)`: returns a subset of a given array, removing unwanted elements