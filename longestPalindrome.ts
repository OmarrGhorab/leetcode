function longestPalindrome(s: string): string {
    function expandFromCenter(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; // expand outward
            right++; // expand outward
        }
        return s.slice(left + 1, right);
    }

    let longest = '';
    for (let i = 0; i < s.length; i++) {
        const odd = expandFromCenter(i, i);
        const even = expandFromCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }
    return longest;
};