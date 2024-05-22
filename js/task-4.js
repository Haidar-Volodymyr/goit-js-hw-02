
//   ---- 1 варіант -----

function getShippingCost(country) {
  switch (country) {
    case "China":
      price = 100;
      return `Shipping to ${country} will cost ${price}  credits`;
      break;
    case "Chile":
      price = 250;
      return `Shipping to ${country} will cost ${price}  credits`;
      break;
    case "Australia":
      price = 170;
      return `Shipping to ${country} will cost ${price}  credits`;
      break;
    case "Jamaica":
      price = 120;
      return `Shipping to ${country} will cost ${price}  credits`;
      break;
    default:
    return `Sorry, there is no delivery to your country`
  }
}

//      ------ 2 варіант --------
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"





function makeTransaction(quantity, pricePerDroid, customerCredits) {
         const totalPrice = quantity * pricePerDroid;
         return totalPrice > customerCredits ? `"Insufficient funds!"` :
          `"You ordered ${quantity} droids worth ${totalPrice} credits!"`}



console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
  console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"