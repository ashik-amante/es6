const max=  Math.max(1,2,3,4,5,56,6,7,8)
console.log(max);

// spread operator ||||  ... three dot before array 
const arraymax = Math.max(...[2,3,4,5,6,7])

const number  = [32,43,43,454,54,3]
const maxvalue = Math.max(...number)
console.log(maxvalue);

// use spread operator for copy
const friend = [1,59,5]
const bondhu = friend
bondhu.push(23)


const dosto = [...friend]
friend.push(44444)
console.log(dosto);
console.log(friend);

// auto add // add extra value 

const ex = [...friend  , 4343434343434]
console.log(ex);

const actor = ['sakib', 'ononto', 'digbaj'];
console.log(...actor);

// copy every where 
const num = [23,34,4,54,56567,4]
const allNumber = [9,9,8,...num,1,2,8]
console.log(allNumber);






