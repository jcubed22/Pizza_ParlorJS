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
    return this.cost;
}

function Order(pizzas, total) {
    this.pizzas = [];
    this.total = total;
}

Order.prototype.orderTotal = function() {
    var orderTotal = 0;
    for (var pizza in this.pizzas) {
        orderTotal += this.pizzas[pizza].price();
    }
    this.total = orderTotal;
    return orderTotal;
}
