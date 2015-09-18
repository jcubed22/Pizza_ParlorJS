describe('Pizza', function() {
    it("creates a new pizza object with given information", function() {
        var testPizza = new Pizza(10, ["pepperoni"], 1);
        expect(testPizza.size).to.equal(10);
        expect(testPizza.toppings).to.eql(["pepperoni"]);
        expect(testPizza.quantity).to.equal(1);
    });

    it("adds the cost method to all pizzas", function() {
        var testPizza = new Pizza(12, ["pepperoni", "sausage"], 2)
        expect(testPizza.cost()).to.equal(25);
    });
});
