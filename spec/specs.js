describe('Pizza', function() {
    it("creates a new pizza object with given information", function() {
        var testPizza = new Pizza(10, ["pepperoni"], 1);
        expect(testPizza.size).to.equal(10);
        expect(testPizza.toppings).to.eql(["pepperoni"]);
        expect(testPizza.quantity).to.equal(1);
    });

    it("adds the cost method to all pizzas", function() {
        var testPizza = new Pizza(12, ["pepperoni", "sausage"], 2);
        testPizza.price();
        expect(testPizza.cost).to.equal(25);
    });
});

describe('Order', function() {
    it("creates a new Order object", function() {
        var testOrder = new Order();
        expect(testOrder).to.be.an('object');
    });

    it("adds orderTotal method to all Order objects", function() {
        var testOrder = new Order();
        var testPizza = new Pizza(10, ["pepperoni"], 1);
        var testPizza2 = new Pizza(12, ["pepperoni", "sausage"], 2);
        expect(testOrder.orderTotal()).to.be.equal(35);
    });
});
