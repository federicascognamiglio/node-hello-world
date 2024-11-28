const arguments = process.argv;
const vowels = ["a", "e", "i", "o", "u"];

let vowelsNum = 0;
for (let i = 0; i < vowels.length; i++) {
    curVowel = vowels[i];
    if (arguments[2].includes(curVowel)) {
        vowelsNum += 1;
    }
}

console.log(vowelsNum);
