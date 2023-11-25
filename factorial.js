// function sumFactorial(number) {
//     let sum = 1;
//     for (let i = 1; i < number; i++) {
//         sum = sum * number
//         console.log(i, sum)
//     }
//     return sum;
// }
// const result = sumFactorial(7)
// console.log(result)


function multipulFactorial(number) {
    let multipul = 1;
    for (let i = number; i > 1; i--) {
        multipul = multipul * i;
        console.log(i, multipul)
    }
    return multipul;
}
const result = multipulFactorial(10)
console.log(result)