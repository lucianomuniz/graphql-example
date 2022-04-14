const products = [
  {
    id: "redshoe",
    description: "Red Shoes",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const machedProduct = getProductById(id);

  if (machedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    machedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
