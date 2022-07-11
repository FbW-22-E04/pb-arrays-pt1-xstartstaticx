// 1
const euroCities = ["Hamburg", "Granada", "Kiev", "Dublin", "Prague"];
console.log("Q1a:", euroCities);
const secondCity = euroCities[1];
console.log("Q1b:", secondCity);

// 2
euroCities.splice(0, 1, "Berlin");
console.log("Q2:", euroCities);

// 3
console.log("Q3:", euroCities.length);

// 4
euroCities.pop();
console.log("Q4:", euroCities);

// 5
euroCities.push("Budapest");
console.log("Q5:", euroCities);

// 6
const asianCities = [
  "Singapore",
  "Kyoto",
  "Seoul",
  "Hong Kong",
  "Wuhan",
  "Dubai",
  "Shenzhen",
];
console.log("Q6:", asianCities);

// 7
const euroJoined = euroCities.join();
const asianJoined = asianCities.join();
const worldCities = (euroJoined + "," + asianJoined).split(",");
console.log("Q7:", worldCities);

// 8
console.log("Q8:", worldCities.reverse());
// Extra
// console.log("Qb:", (euroJoined + "," + asianJoined).split(",").reverse());

// 9 Bonus
euroCities.splice(2, 1);
console.log("Q9 BONUS:", euroCities);
// 10 Bonus

// 11 Bonus
