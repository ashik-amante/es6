const mathoperation = (array1 , array2) =>{
    const marge = [...array1,...array2];
    const maxValue = Math.max(...marge)
    return maxValue;
}

const result = mathoperation([3,4,55,6], [2,7,8,9])
console.log(result);