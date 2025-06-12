function reverse(x: number): number {
    const isNegative = x < 0;
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr); // number now 

    // Handle 32-bit overflow 
    if (reversedNum > 2 ** 31 - 1) return 0;

    return isNegative ? -reversedNum : reversedNum;
}