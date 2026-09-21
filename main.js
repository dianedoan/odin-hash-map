import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
console.log(test);
console.log(test.get('apple'));
console.log(test.get('lion'));
console.log(test.length());
console.log(test.has('apple'));
console.log(test.has('lion'));
console.log(test.remove('apple'));
console.log(test.remove('orange'));
console.log(test);
console.log(test.length());
