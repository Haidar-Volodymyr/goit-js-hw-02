
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

