

function chepestPhone(phones) {
    let cheapestPhone = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i]
        if (phone.price < cheapestPhone.price) {
            cheapestPhone = phone
        }
    }
    return cheapestPhone;
}
const phones = [
    { name: 'nokia', model: '1200', price: 1300 },
    { name: 'realme', model: '1200', price: 11300 },
    { name: 'readme', model: '1200', price: 19900 },
    { name: 'xiami', model: '1200', price: 400 },
    { name: 'iphone', model: '1200', price: 500 },
    { name: 'samsung', model: '1200', price: 300 },
]
const allphones = chepestPhone(phones)
console.log(allphones)
