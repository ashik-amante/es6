const mathresult = inputArray =>{
    let sum = 0;
    for(const number of inputArray){
        const sqre = number * number;
        sum = sum + sqre;
    }
    const avg = sum / inputArray.length;
    return avg
}
const result = mathresult([1,2,3,4]);
console.log(result);