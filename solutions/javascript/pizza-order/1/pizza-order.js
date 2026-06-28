
const PIZZA_PRICES = {
  'Margherita': 7,
  'Caprese': 9,
  'Formaggio': 10,
};


const EXTRA_PRICES = {
  'ExtraSauce': 1,
  'ExtraToppings': 2,
};


export function pizzaPrice(pizza, ...extras) {
  const basePrice = PIZZA_PRICES[pizza];
  

  if (extras.length === 0) {
    return basePrice;
  }

  const [firstExtra, ...remainingExtras] = extras;
  return EXTRA_PRICES[firstExtra] + pizzaPrice(pizza, ...remainingExtras);
}


export function orderPrice(pizzaOrders) {

  return pizzaOrders.reduce((total, order) => {
    return total + pizzaPrice(order.pizza, ...order.extras);
  }, 0);
}
