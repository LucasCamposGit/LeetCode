namespace longestCommomPrefix {
    // Write a function to find the longest common prefix string amongst an array of strings.
    // If there is no common prefix, return an empty string "".
    
    // Example 1:    
    
    // Input: strs = ["flower","flow","flight"]
    // Output: "fl"
    
    // Example 2:
    
    // Input: strs = ["dog","racecar","car"]
    // Output: ""
    // Explanation: There is no common prefix among the input strings.
     

    function longestCommomPrefix(strs: string[]): string {
        let res = "";

        for (let i = 0; i < strs[0].length; i++) {

            for (let str of strs) {
                if(str.length == i || str[i] !== strs[0][i]) {
                    return res;
                }
            }

            res += strs[0][i];
        }
        
        return res;
    }

    console.log(longestCommomPrefix(["flower","flow","flight"]));
    console.log(longestCommomPrefix(["dog","racecar","car"]));

}