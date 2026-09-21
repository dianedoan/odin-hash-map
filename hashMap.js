class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = [];
    for (let i = 0; i < capacity; i++) {
      this.buckets.push([]);
    }
  }

  // take a string key and produces a hash code with it
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity; // ensure index fits in the buckets
    }

    return hashCode;
  }

  // take a key and a value to associate with the key
  set(key, value) {
    // check if there are more entries than max load
    const maxLoad = this.loadFactor * this.capacity;
    if (this.length() >= maxLoad) {
      const oldBuckets = this.buckets;

      // double bucket capacity
      this.capacity = this.capacity * 2;
      this.buckets = [];
      for (let i = 0; i < this.capacity; i++) {
        this.buckets.push([]);
      }

      // rehash values into new buckets array
      for (const bucket of oldBuckets) {
        for (const [oldKey, oldValue] of bucket) {
          const index = this.hash(oldKey);
          this.buckets[index].push([oldKey, oldValue]);
        }
      }
    }

    const index = this.hash(key); // use hash code as index of bucket array to store the key-value pair
    const bucket = this.buckets[index]; // find bucket at index

    // if key already exists in hash map, overwrite old value with new one
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // otherwise store key-value pair in bucket
    bucket.push([key, value]);
  }

  // take a key and return the value that is associated with it
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // get value associated with key
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        const value = bucket[i][1];
        return value;
      }
    }

    return undefined;
  }
  // take a key as an argument and returns a boolean based on whether or not the key is in the hash map
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // check if key exists in hash map
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true; // key exists
      }
    }

    return false; // key does not exist
  }

  // take a key as an argument
  // if the key is in the hash map, it removes the entry with that key and returns true
  // if the key isn't in the hash map, it returns false
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // check if key exists in hash map
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) { // key exists
        bucket.splice(i, 1); // remove entry
        return true; 
      }
    }

    return false; // key does not exist
  }

  // return the number of stored keys in the hash map
  length() {
    let length = 0;

    for (const bucket of this.buckets) {
      length += bucket.length; // add all lengths of each bucket together
    }

    return length;
  }

  // remove all entries in the hash map
  clear() {
    // set length to 0 for each bucket
    for (const bucket of this.buckets) {
      bucket.length = 0;
    }
  }

  // return an array containing all the keys (not values) inside the hash map
  keys() {
    const keys = [];
    
    // look for keys in hash map
    for (const bucket of this.buckets) {
      for (let i = 0; i < bucket.length; i++) {
        const key = bucket[i][0];
        if (key !== null) {
          keys.push(key); // add key to array
        }
      }
    }
    
    return keys;
  }

  // return an array containing all the values (not keys) inside the hash map
  values() {
    const values = [];

    // look for values in hash map
    for (const bucket of this.buckets) {
      for (let i = 0; i < bucket.length; i++) {
        const value = bucket[i][1];
        if (value !== null) {
          values.push(value); // add value to array
        }
      }
    }

    return values;
  }

  // return an array containing each key-value pair in their own arrays
  entries() {
    const entries = [];

    // look for key-value pairs
    for (const bucket of this.buckets) {
      for (let i = 0; i < bucket.length; i++) {
        const key = bucket[i][0];
        const value = bucket[i][1];
        if (key !== null && value !== null) {
          entries.push([key, value]); // add key-value pairs to array
        }
      }
    }

    return entries;
  }

}

export { HashMap };
