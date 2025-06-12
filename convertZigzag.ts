function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) return s;

    const rows: string[] = Array(Math.min(numRows, s.length)).fill('');
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) { // check not in the middle rows
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('')
};