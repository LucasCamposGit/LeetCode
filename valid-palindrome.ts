
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
    return reorderString(s) === reorderString(t)
}


console.log(isAnagram("lucas", "lucsa"));