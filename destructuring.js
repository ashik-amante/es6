const actor = {
    name: 'ananto',
    age:34,
    phone:'32343434',
    money: 100000000000
}
// both side same type || object = object
const {name,phone,money, age : boyos} = actor;

console.log(money);
console.log(phone);
console.log(name);
console.log(boyos);

// arrray
const number = [23,43]
const [x,y] = number;
console.log(x);
console.log(y);

function double(a,b){
    return [a*2,b*2]
}

const [first, second] = double(2,3); //coz function will return array
console.log(first,second);