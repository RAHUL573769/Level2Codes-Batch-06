const students = [
  { id: 1, name: "Rafi" },
  { id: 2, name: "Safi" },
  { id: 3, name: "Soni" },
];

const snacks = [
  { id: 201, studentId: 1, title: "Chocolate" },
  { id: 202, studentId: 2, title: "Chocolate1" },
  { id: 203, studentId: 3, title: "Chocolate2" },
  { id: 204, studentId: 1, title: "Cookies" }, // fixed duplicate id
];

const mainBasket = snacks.reduce((basket, snack) => {
  const { studentId } = snack;

  if (!basket[studentId]) {
    basket[studentId] = [];
  }

  basket[studentId].push(snack);
  return basket;
}, {});

console.log(mainBasket);
