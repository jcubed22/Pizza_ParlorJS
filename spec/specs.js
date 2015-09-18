describe('createPizza', function() {
    it("creates a new pizza object with given information", function() {
        var testPizza = new Pizza(12, ["pepperoni"], 1);
        expect(testPizza.size).to.equal(12);
        expect(testPizza.toppings).to.eql(["pepperoni"]);
        expect(testPizza.quantity).to.equal(1);
    });
});
