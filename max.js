function bigest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const numbers = [5, 2, 3, 4, 5, 6, 435646];
const result = bigest(numbers)
console.log(result)