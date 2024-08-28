// problelm 1

const add = (num1, num2 = 0) => num1 +num2;

const result = add(3,4);
console.log(result);

// problem 2

const evenNameChecker = arrayInput => {
    const arr = []
    for(const name of arrayInput){
        if(name.length % 2 == 0){
            arr.push(name)
        }
    }
    return arr
}

const friends = ['ashik', 'ok', 'salah', 'mithfa'];
const result2 = evenNameChecker(friends);
console.log(result2); 