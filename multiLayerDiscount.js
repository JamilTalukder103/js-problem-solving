function multiLayerDisCount(quntity) {
    const first100Rate = 100;
    const secound100Rate = 90;
    const rest100Rate = 70;
    if (quntity <= 100) {
        const price = quntity * first100Rate;
        return price;
    }
    else if (quntity <= 200) {
        const first100Price = first100Rate * 100;
        const restQuntity = quntity - 100;
        const restQuntityPrice = restQuntity * secound100Rate;
        const totalPrice = first100Price + restQuntityPrice;
        return totalPrice;
    }
    else {
        const first100Price = first100Rate * 100;
        const secound100Price = quntity * secound100Rate;
        const restQuntity = quntity - 200;
        const restTicketPrice = restQuntity * rest100Rate;
        const totalCost = first100Price + secound100Price + restTicketPrice;
        return totalCost;
    }
}
const totalQuntity = multiLayerDisCount(201)
console.log(totalQuntity)