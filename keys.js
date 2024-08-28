const car = {
    brand: 'bmw',
    origin: 'germany',
    price: 123333333,
    color:'black',
    owner: 'ashik'
}

const key = Object.keys(car);
console.log(key);
const value = Object.values(car)
console.log(value);

// ass a array ///  array of array, two dimentional array

const pair = Object.entries(car);
console.log(pair);

// remove property
delete car.color;
console.log(car);

//  delete use of destructuring

const {origin,...rest} = car
console.log(rest);