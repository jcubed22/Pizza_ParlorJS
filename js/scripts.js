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
    this.total = orderTotal.toFixed(2);
}

Order.prototype.addPizza = function(pizza) {
    this.pizzas.push(pizza);
    this.orderTotal();
}

$(document).ready(function() {
    /* Removes the required attribute from checkboxes when one box has been checked */
    var requiredCheckboxes = $(':checkbox[required]');

    requiredCheckboxes.change(function(){
        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        }
        else {
            requiredCheckboxes.attr('required', 'required');
        }
    });

    $("form#new-pizza").submit(function(event) {
        event.preventDefault();
        var order = new Order();
        var size = parseInt($("select#size").val());
        /* Loops through all checked boxes and creates an array of their values */
        var toppings = [];
        $(':checkbox:checked').each(function(i){
          toppings[i] = $(this).val();
        });

        var quantity = parseInt($("select#qty").val());
        var newPizza = new Pizza(size, toppings, quantity);

        newPizza.price();
        order.addPizza(newPizza);
        order.orderTotal();

        $("#show-order").show();
        $(".pizza").text(newPizza.size + '" ' + newPizza.toppings.length + " topping x " + newPizza.quantity);
        $(".total").text("$" +  order.total);

        /* Resets form when it is submitted and all checkboxes to required*/
        $("form#new-pizza").trigger("reset");
        requiredCheckboxes.attr('required', 'required');
    });
});
