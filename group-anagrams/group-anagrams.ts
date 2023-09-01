namespace groupAnagrams {

    // Given an array of strings strs, group the anagrams together. 
    // You can return the answer in any order.

    // An Anagram is a word or phrase formed by rearranging the letters of 
    // a different word or phrase, typically using all the original letters exactly once.
    
     
    
    // Example 1:
    
    // Input: strs = ["eat","tea","tan","ate","nat","bat"]
    // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    // Example 2:
    
    // Input: strs = [""]
    // Output: [[""]]
    // Example 3:
    
    // Input: strs = ["a"]
    // Output: [["a"]]

    function groupAnagrams(strs: string[]): string[][] {

        let matrix: string[][] = [];
    
        for(let i = 0; i < strs.length; i++) {
            matrix.push([strs[i]])

            for (let j = 0; j < strs.length; j++) {
                if (j !== i) {
                    let flag = isAnagram(strs[i], strs[j]);
                    if (flag) {
                        matrix[i].push(strs[j]);
                    }
                }
            }
        }

        return matrix;
    
    }
    
    function isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }   
        s = sortString(s);
        t = sortString(t);
        
        return s === t;
    }


    function sortString(s: string): string {
        let arr = s.split("");

        for (let i = 0; i < arr.length; i++) {
            let temp: string = arr[i];

            for (let j = 0; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr.join("");
    }
}