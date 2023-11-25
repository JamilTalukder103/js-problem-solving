// function stringReverse(words) {
//     let reversed = '';
//     for (let i = words.length - 1; i >= 0; i--) {
//         const word = words[i]
//         reversed = reversed + word;
//     }
//     return reversed;

// }
// const words = 'i am bad boy';
// const reveseTheWord = stringReverse(words)
// console.log(reveseTheWord)

function wordSpilt(word) {
    const spilt = word.split(' ')
    console.log(spilt)
    let result = []
    for (let i = spilt.length - 1; i >= 0; i--) {
        const element = spilt[i]
        result.push(element)
    }
    const joinTheWord = result.join(' ')
    return joinTheWord;
}
const word = 'i am good boy';
const result = wordSpilt(word)
console.log(result)












