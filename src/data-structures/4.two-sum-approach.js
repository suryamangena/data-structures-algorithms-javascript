/**
 * Problem 1:   Two sum approach find indexes of pairs which target equal to 9 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i<nums.length;i++){
        map.set(nums[i],i);
        
    }
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.get(complement)!=null && map.get(complement)!=i){ // This conditin check value exists and map and also it should not match itself
            return [i, map.get(complement)];
        }
    }
};


//console.log(twoSum());

/**
 * Above Problem1:   works for array with duplicates [2,7,11,15], but not work if array has multiple pairs
 */

/**
 * Problem2: Two sum approach find indexes of pairs which target equal to 9 
 * Here we may have multiple pairs 
 * [2,7,11,15,1,8] , target = 9 
 * O/P: [[2,7],[1,8]] 
 */

var twoSum = function(nums, target) {
    const map = new Map();
    const newArray = [];
    for(let i = 0; i<nums.length;i++){
        map.set(nums[i],i);
        
    }
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.get(complement)!=null && map.get(complement)!=i){ // This conditin check value exists and map and also it should not match itself
            newArray.push([i, map.get(complement)]);
        }
    }
    console.log(newArray);

    //Filter vice-versa items 
    return newArray.filter(([a,b],index,array)=>{
        for(let i = index+1; i< array.length; i++ ){
            const [c,d] = array[i];
            if(a==d && b==c){
                return true;
            }
        }
        return false;
    });

   
};

console.log(twoSum([2,7,11,15,1,8,6,3,10], 9));

/**
 * Above Problem2: O/P is  [[0, 1], [1, 0], [4, 5], [5, 4]];
 * Now we filter only items 
 */