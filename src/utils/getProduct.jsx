import products from "../data/products";

/**
 * Get product by slug
 */

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

/**
 * Get featured products
 */

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

/**
 * Get products by category
 */

export function getProductsByCategory(category) {
  return products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Search products
 */

export function searchProducts(query) {
  if (!query) return products;

  return products.filter((product) => {
    const search = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.overview.toLowerCase().includes(search)
    );
  });
}

/**
 * Get related products
 */

export function getRelatedProducts(productId, category) {
  return products
    .filter(
      (product) =>
        product.id !== productId &&
        product.category === category
    )
    .slice(0, 3);
}