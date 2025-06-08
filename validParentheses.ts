function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (const char of s) {
        if (map[char]) {
            stack.push(char);
        } else if (char !== map[stack.pop()!]) {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("(["));
console.log(isValid("]"));