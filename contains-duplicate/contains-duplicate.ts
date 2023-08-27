namespace containsDuplicate {

    function containsDuplicate(nums: number[]): boolean {

        const map: Map<number, number> = new Map();
    
        for(let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                return true;
            }
            map.set(nums[i], nums[i]);
        }
    
        return false;
    
    };

    console.log(containsDuplicate([1,1,1,2,2,2,3]));
    console.log(containsDuplicate([1,2,3]));
}