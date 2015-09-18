function Pizza(size, toppings, quantity, cost) {
    this.size = size;
    this.toppings = toppings;
    this.quantity = quantity;
    this.cost = cost;
}

Pizza.prototype.price = function() {
    if(this.toppings.length > 1) {
        var cost = ((this.size + ((this.toppings.length - 1) * .50)) * this.quantity);
    } else {
        var cost = this.size * this.quantity;
    }
    this.cost = cost;
}
