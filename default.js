// can assign any value as default

function add(num1,num2=0){
    const sum = num1 + num2;
    console.log(num1, num2, sum);
    return sum
}

const sum = add(2,);
console.log(sum);


function fullName(firstname, lastname = 'uddin'){
    const name = firstname + ' ' + lastname;
    return name
}

const name = fullName('ashik');
console.log(name);
const dak = fullName('kamal')
console.log(dak);

function fiends(number = []){

}
function human(people = {}){
    
}