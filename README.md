# HashMap
This project contains the `HashMap` class containing the following functions:
- `hash(key)` takes a string key and produces a hash code with it
- `set(key, value)` takes a key and a value to associate with the key
  - If the key already exists in the hash map, then the old value associated with it is overwritten with the new one
  - Buckets double their capacity when the hash map exceeds `loadFactor`
- `get(key)` takes a key as an argument and returns the value that is associated with it
  - If the key is not found, return `undefined`
- `has(key)` takes a key as an argument and returns a boolean based on whether or not the key is in the hash map
- `remove(key)` takes a key as an argument
  - If the given key is in the hash map, it removes the entry with that key then returns true
  - If the key is not in the hash map, it returns false
- `length()` returns the number of stored keys in the hash map
- `clear()` removes all entries in the hash map
- `keys()` returns an array containing all the keys (not values) inside the hash map
- `values()` returns an array containing all the values (not keys) inside the hash map
- `entries()` returns an array that contains each key-value pair in their own arrays
  - For example: `[[firstKey, firstValue], [secondKey, secondValue]]`

## Description
This project demonstrates the skills learnt from the JavaScript course in The Odin Project up until the [HashMap Data Structure](https://www.theodinproject.com/lessons/javascript-hashmap-data-structure) topic. 