function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return '';
    let prefix = strs[0];  // first word reference

    for (let i = 1; i < strs.length; i++) {  // start with second word
        let j = 0;
        while ( j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) { // compare characters
            j++; 
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
};