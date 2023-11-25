function removeDuplicate(names) {
    let unique = []
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        console.log(name)
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique;
}
const names = ['jamil', 'kriti', 'niti', 'jamil', 'kriti', 'jisun', 'niti']
const result = removeDuplicate(names)
console.log(result)