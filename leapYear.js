function leapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return 'this year is leap year'
    } else {
        return 'this is year is not a leap year'
    }
}
const result = leapYear(2024)
console.log(result)