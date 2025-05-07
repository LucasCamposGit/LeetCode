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
    
function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false;
    }
    
    const sMap: Map<string, number> = new Map(); 
    const tMap: Map<string, number> = new Map(); 

    for (let i = 0; i < t.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1)
        } else {
            sMap.set(s[i], 1);
        }
        
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1)
        } else {
            tMap.set(t[i], 1);
        }
    }
   
    for(let i = 0; i < t.length; i++) {
        if (sMap.get(t[i]) !== tMap.get(t[i])){
            return false;   
        }
    }

    return true;

};

console.log(isAnagram("anagram","nagaram"));