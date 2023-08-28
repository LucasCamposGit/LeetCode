namespace replaceElements {
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
