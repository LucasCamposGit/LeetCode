namespace replaceElements {
    // Given an array arr, replace every element in that 
    // array with the greatest element among the elements to its right, 
    // and replace the last element with -1.

    // After doing so, return the array.
    
     
    
    // Example 1:
    
    // Input: arr = [17,18,5,4,6,1]
    // Output: [18,6,6,6,1,-1]



    function replaceElements(arr: number[]): number[] {
        /* arr[0] = max(arr[1], max(1)) */
    
        let currMax = -1;
    
        for (let i = (arr.length - 1); i >= 0; i--) {
            let newMax = Math.max(arr[i], currMax);
            arr[i] = currMax;
            currMax = newMax;
        }
    
        return arr;
    
    };

    console.log(replaceElements([17,18,5,4,6,1]));
}
