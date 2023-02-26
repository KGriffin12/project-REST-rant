const db = require("../models");

db.Place.create([
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/REST-rant-one.jpg",
    founded: 1989,
  },
  {
    name: "Coding Cat Cafe",
    city: "Pheonix",
    state: "AZ",
    cuisines: "Coffe, Bakery",
    pic: "/images/REST-rant-two.jpg",
    founded: 2020,
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });