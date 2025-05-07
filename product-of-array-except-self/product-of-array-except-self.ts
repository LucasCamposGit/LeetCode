// Given an integer array nums, return an array 
// answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is 
// guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and 
// without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


function productExceptSelf(nums: number[]): number[] {

    let res: number[] = [];
    
    let prefix: number = 1;
    for(let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix = prefix * nums[i];
    }
    
    let postfix: number = 1;
    for(let i = nums.length - 1; i >= 0 ; i--) {
        res[i] = res[i] * postfix;
        postfix = postfix * nums[i];
    }

    return res;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));