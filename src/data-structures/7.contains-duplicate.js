/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length;i++){
        let count = 0;
        if(map.get(nums[i])!=null){
         count = nums[i];
        }
        map.set(nums[i],++count);
        if(count>1){
            return true;
        }
    }
    return false;
    
};