var cart = [];

function getCart(name) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  let price = Math.floor(Math.random()*100);

  let obj = {`itemName:${name}, itemPrice: ${price}`}

  cart.push(obj);

  return `${name} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {return 'Your shopping cart is empty.'}

  let str = `In your cart, you have `;

  for (let i = 0; i < cart.length; i++) {
    i !== cart.length-1 ? str += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, ` : `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
  }

  return str;
}

function total() {
  // write your code here
  let count = 0;

  for (let i = 0; i < cart.length; i++) {
    count += cart[i]['itemPrice'];
  }

  return count;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i]['itemName']) {
      cart.splice(i, 1)
      return cart;}
  }

  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    cart = [];
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
