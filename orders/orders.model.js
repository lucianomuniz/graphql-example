const orders = [
  {
    date: "2005-05-05",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  console.log("Getting orders...");
  return orders;
}

module.exports = {
  getAllOrders,
};
