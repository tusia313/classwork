const restaurants = [
  {
    name: "Tony's Pizzera",
    cuisine: "Italian",
    rating: 4,
    address: {
      first_line: "45 Lombard Street",
      second_line: "London",
      postcode: "SE1 4DF",
      contacts: ["07732102351", "07839375921"]
    }
  },
  {
    name: "Sushi Swish",
    cuisine: "Japanese",
    rating: 5,
    address: {
      "First Line": "21 Avington Lane",
      "Second Line": "London",
      Postcode: "SW1 4PE",
      contacts: ["07729473621", "07734967261"]
    }
  }
]

// 1. Get Sushi Swishes cuisine
console.log(restaurants[1]['cuisine'])
// 2. Get Tony's Pizzera's postcode
console.log(restaurants[0]['address']['postcode'])
// 3. Get both the restaurants names
restaurants.forEach(restaurant => console.log(restaurant.name))
// 4. Get Tony's Pizzera's first line of their address
console.log(restaurants[0].address.first_line)
// 5. Get Sushi Swishes first line of their address
console.log(restaurants[1].address["First Line"])
// 6. Get Sushi Swishes second contact number
console.log(restaurants[1].address.contacts[1])


