/**
 * Given an integer array nums, find the  subarray with the largest sum, and return its sum.
 * 
 * Rule: When we add negative value, sum decreases so whenever we face negative value we make currSum = 0;
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = nums[0];
    let maxSum = currSum;
    let startIndex = 0;
    let endIndex = 0;
    for(let i =1; i<nums.length; i++){
        if(currSum<0) {
          currSum =0; //If we adding the negative value maxSum value decreases so we will make currSum =0
          startIndex = i;
        }
        currSum = currSum + nums[i];
       // maxSum = Math.max(maxSum,currSum);
        if(currSum>maxSum){
            maxSum = currSum;
            endIndex = i;
        }
        console.log(startIndex, endIndex);
    }

    return maxSum;
    
};

/**
 * if the question asked to print the subarray along with the max sum value 
 * Time Complexity : O(n)
 * Reference: https://www.youtube.com/watch?v=SsVaQCoYChs
 * 
 */