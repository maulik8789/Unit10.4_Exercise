/////1st
const filterOutOdds = (...vals) => {
    return vals.filter((num) => {
        return num % 2 === 0;
        });
};

console.log(filterOutOdds(1,2,3,4,5,6,7,8,9));

///2nd findMin
const findMin = (...nums) => {
        return Math.min(...nums);
};

console.log(findMin(1,4,12,-3));

///3rd mergeObjects
const mergeObj =  (...vals) => {
    let newObj = {};
    for(let i = 0; i < vals.length; i++){
        newObj = { 
            ...newObj,
            ...vals[i],
        }
    }
return (newObj);
}
console.log(mergeObj({car:1, bike:2}, {cycle:0, van:5}, {appartment:2, bunglow:1}));

/////4th doubleAndReturnArgs
const doubleAndReturnArgs = (...vals) => {
    let newArr = []; 
    let temp = [];
    let k= [];
    for(let i = 0; i < vals.length; i++){
        if(typeof vals[i] === 'object'){
            k = [...vals[i]];
        }
    }
    newArr = [...vals];
    for(let i = 0; i < vals.length; i++){
        if(typeof vals[i] != 'Array'){
        let ad = vals[i]*2;
        temp.push(ad);
        newArr.splice(i, 1);
        newArr[i] = temp[i];
        }
    }
    for(let i = 0; i < newArr.length; i++){
        if(isNaN(newArr[i])){
        newArr.splice(i, 1);
        }
    }
    newArr = [...k, ...newArr]
    return newArr;
};

console.log(doubleAndReturnArgs([1,2,3],4,4));

/////5th
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let newArr1 = [...items];
    let i = Math.floor((Math.random() * items.length-1) + 0);
    newArr1.splice(i, 1);
    return newArr1;
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    let newArr2 = [...array1, ...array2];
    return newArr2;
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj1 = {
        ...obj,
        [key] : val
    };
    console.log(newObj1);
    return newObj1;
};
addKeyVal({'house': 'appartment'}, 'car', 'Honda' );

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj2 = { ...obj }
    delete newObj2[key]
    return newObj2;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    let newObj3 = {
        ...obj1,
        ...obj2
    }
    return newObj3;
};


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj4 = {...obj};
    newObj4[key] = val;
    return newObj4;
};