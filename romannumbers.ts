function romanToInt(s: string): number {
    let result = 0;
    let romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    for (let i = 0; i < s.length; i++) {
        const current = romanMap.get(s[i])!;
        const next = romanMap.get(s[i + 1]) ?? 0;

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInt('III'));   
console.log(romanToInt('IX'));    
console.log(romanToInt('LVIII')); 
console.log(romanToInt('MCMXCIV')); 
