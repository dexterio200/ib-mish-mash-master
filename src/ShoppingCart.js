class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        const item = {
            "name": itemName,
            "pricePerUnit": price,
            "quantity": quantity
        }

        return this.items.push(item)
    }

    clear() {
        return this.items.length = 0
    }

    total() {
        return this.items.reduce((totalCartValue, item) => {
            const totalItemValue = item.pricePerUnit * item.quantity
            totalCartValue += totalItemValue
            return totalCartValue
        }, 0)
    }
}


module.exports = ShoppingCart