//Excel Sheet Row/Column

const number = 2000;

function cellIdentifier(n){
    const maxCols = 702;            // 26 X 27
    const getRowNumber = Math.ceil(n/maxCols);

    const row1Equivalent = n - (getRowNumber - 1) * maxCols;     //get corresponding cell in row 1
    const getColumnName = ((num) => {
        let ret = '';
        for (let a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
            ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
        }
        return ret;
    })(row1Equivalent);

    return `${getRowNumber}${getColumnName}`;

}

console.log("Cell identifier : ", cellIdentifier(number));
