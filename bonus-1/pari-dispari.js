// const randomNum = Math.floor(Math.random() * 100 ) + 1;

const arguments = process.argv;

if (parseInt(arguments[2]) % 2 === 0) {
    console.log(`Il numero ${arguments[2]} è pari`);
} else {
    console.log(`Il numero ${arguments[2]} è dispari`);
}