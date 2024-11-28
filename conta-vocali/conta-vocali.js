const arguments = process.argv;
const vowels = ["a", "e", "i", "o", "u"];

let vowelsNum = 0;
for (let i = 0; i < arguments[2].length; i++) {
    const curChar = arguments[2][i];
    if (vowels.includes(curChar)) {
        vowelsNum += 1;
    }
}

console.log(vowelsNum);
