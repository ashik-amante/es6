const mult = (a,b,c) => a* b*c;
const result = mult(1,23,1)
console.log(result);

// single perameter

const getage = person => person.age;
const people = { name: 'kallu', age:12,id:3322}
const age = getage(people);
console.log(age);

const index = numbers => numbers[2];
const array  = [1,2,3,4,5,6]
const arrind = index(array)
console.log(arrind);

// no perameter
const getpi = () => Math.PI;
console.log(getpi());