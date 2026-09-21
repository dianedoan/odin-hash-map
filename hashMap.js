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

  // takes a key as an argument
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

}

export { HashMap };
