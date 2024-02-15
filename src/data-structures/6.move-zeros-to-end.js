/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let zeroCount = 0;
    for(let i = 0; i<nums.length; i++){
        console.log(nums[i])
        if(nums[i]==0){
            ++zeroCount;
        }
    }

   let loopCount = 0
    while(loopCount<=zeroCount){
        for(let i=0; i<nums.length-1; i++){
            if(nums[i]==0 && nums[i]!=nums[i+1]){
                const value = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = value;
            }
           
        }
         ++loopCount;
    }
   return nums 
};


moveZeroes()

/**
 * BigO: O(a*b)
 */

/**
 * Solution2 : Optimized Solution 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let zeroCount = 0;
    for(let i = 0; i<nums.length; i++){
     
        if(nums[i]==0){
            zeroCount++;
        }else if(zeroCount>0){
            let t = nums[i];
            nums[i]=0;
            nums[i-zeroCount]=t;
        }
    }

 
   return nums 
};