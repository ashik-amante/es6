//  for of is apply on array and string

const number = [1,2,3,4,5];
for(const num of number){
    console.log(num);
}

const nobab = 'siraj ud doula';
for(const char of nobab){
    console.log(char);
}

// for in is use in object

const phone = {
    brand: 'samsung',
    price: 23232,
    color: 'balck'
}

for(const key in phone){
    const value = phone[key];
    console.log(key , value);
}

// ghuraia for of chalamu

const key = Object.keys(phone);
console.log(key);
for(const k of key){
    console.log(k);
}

const name = 'ashik';
console.log(name.length);