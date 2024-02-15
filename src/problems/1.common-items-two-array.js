/**
 * 1. First Problem 
 * Brute Force Approach
 * @param {} array1 
 * @param {*} array2 
 * @returns 
 */
function commonItems(array1, array2){
        for(let a1 of array1 ){
            for(let a2 of array2){
                if(a1===a2){
                    return true;
                }
            }
        }
        return false;
}

console.log(commonItems([1,2,4,5,7,8],[91,0,99,10]))

/*
BigO: O(a+b)
Space Complexity : O(1)
*/

/**
 * 2. Second Problem
 * Better Approach using Data Structures Map
 */
function commonItemsTwo(array1, array2){
    let map = new Map();
    for(let a1 of array1){
        map.set(a1,false);
    }

    console.log(map);
   
    for(let a2 of array2){
        if(map.get(a2)!=null){
            map.set(a2,true);
        }
    }
    return map;
}

console.log(commonItemsTwo([1,2,4,5,7,8],[1,91,0,99,10]));

/**
 * BigO = O(a+b)
 * Space Complexity : O(a)
 */

/**
 * 3. Third Problem 
 * using Map
 *  Return true or false instead of object 
 */

function commonItemsThree(array1, array2){
    let map = {};
    for(let a1 of array1){
        if(!map[a1]){
            map[a1] = true;
            
        }
    }
    for(let a2 of array2){
        if(map[a2]){
            return true;
        }
    }
    return false;
}

console.log(commonItemsThree([1,2,4,5,7,8,8],[11,91,0,99,10]));

/**
 * BigO = O(a+b) 
 */

/**
 * How to break the 3rd problem code i.e. how to safe guard the code  to error prone for unexpected errors 
 * If the second array is empty 
 */

/**
 * Built in methods
 */

function commonItemsSome(array1, array2){
    return array1.some(item=>array2.includes(item));
}

console.log(commonItemsSome([1,2,4,5,7,8,8],[1,91,0,99,10]));