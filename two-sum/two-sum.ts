namespace twoSum {

    function twoSum(nums: number[], target: number): number[] {
        let k = 0;
        for(let i = 0; i < nums.length; i++) {
    
            for(let j = (nums.length - 1);  j >= k; j--) {
                if (nums[i] + nums[j] === target && i !== j) {
                    return [i, j];
                }
            }
    
            k++;
        }
    }

    console.log(twoSum([2,7,11,15], 9));
}