/**
 * 1. Input:  Collection 
 * 2. Condition: sum of pairs = 8 
 * 3. Output: yes or no
 * 
 * Interview Process:
 * 1. Can we use array to store the input
 * 2. Are they sorted order 
 * 3. Input can have negatives, duplicates
 */

/**
 * Brute Force Solution
 * If the array is not sorted
 */

function sumOfPairsBruteForce(array1){

    for(let i=0; i<array1.length; i++){ // O(n)
        for(let j=1; j<array1.length;j++){ // O(n)
            if(array1[i]+array1[j]===8){
                return true;
            }
        }
    }
    return false;
}

console.log(sumOfPairsBruteForce([1,6,3,9]));
/**
 * BigO = O(n^2)
 * Space Complexity = O(1)
 */

/**
 * If the array is sorted, then use linear search 
 * 
 * 
 */


/**
 * if array is not sorted, then 
 */


function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    for(let a of arr){
        if(mySet.has(a)){
            return true;
        }
        mySet.add(sum-a);
    }
    return false;
}

console.log(hasPairWithSum2([1,4,4,6,7,9],8))

/**
 * BigO : O(n)
 */