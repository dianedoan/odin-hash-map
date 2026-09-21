import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set('apple', 'red')
console.log(test);
console.log(test.get('apple'));
console.log(test.get('lion'));
