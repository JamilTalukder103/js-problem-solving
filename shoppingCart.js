const shopppingCart = [
    { name: 'nokia', price: 200, quntity: 3 },
    { name: 'nokia', price: 100, quntity: 2 },
    { name: 'nokia', price: 300, quntity: 1 },
    { name: 'nokia', price: 900, quntity: 2 },
]

function totalShoppingCost(shoppping) {
    let totalCost = 0;
    for (let i = 0; i < shoppping.length; i++) {
        const shoppingProduct = shoppping[i];
        const total = shoppingProduct.price * shoppingProduct.quntity
        totalCost = totalCost + total;
    }
    return totalCost;
}
const totalCost = totalShoppingCost(shopppingCart)
console.log(totalCost)