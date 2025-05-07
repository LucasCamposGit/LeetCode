namespace validAnagram {

    //Given two strings s and t, return true if t 
    // is an anagram of s, and false otherwise.

    // An Anagram is a word or phrase formed by rearranging 
    // the letters of a different word or phrase, typically using all 
    // the original letters exactly once.

    // Example 1:

    // Input: s = "anagram", t = "nagaram"
    // Output: true
    // Example 2:
    
    // Input: s = "rat", t = "car"
    // Output: false
    

    function reorderString(str: string): string {
        return str
            .split('')
            .sort((a, b) => {
                return a.localeCompare(b);
            })
            .join('')
    }
    
    var isAnagram = (s: string, t: string): boolean => {
        const isEqual = s.length === t.length;
        if (!isEqual) return false;
    
        return reorderString(s) === reorderString(t)
    }
    
    
    console.log(isAnagram("lucas", "lucsa"));

}