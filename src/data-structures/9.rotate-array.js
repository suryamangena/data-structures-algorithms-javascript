/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const leftArray=[];
    const rightArray=[];
    for(let i=0; i<nums.length;i++){
        if(i<nums.length-k){
            leftArray.push(nums[i]);
        }else{
            rightArray.push(nums[i]);
        }
    }


    return rightArray.concat(leftArray);
    
};

console.log(rotate([1,2,3,4,5,6,7],3))
/**
 * O(n) - Time Complexity and O(n) - Space Complexity 
 */

/**
 * Optimize it 
 */