function oddSumInArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const elenent = numbers[i];

        sum = sum + elenent

    }
    return sum;
}

const numbers = [23, 34, 55, 11, 66]
const result = oddSumInArray(numbers)
console.log(result)
