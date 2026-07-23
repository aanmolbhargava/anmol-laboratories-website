const KEY = "recentlyViewedProducts";

export function addRecentlyViewed(product) {
  if (!product) return;

  const existing = JSON.parse(localStorage.getItem(KEY)) || [];

  const filtered = existing.filter((item) => item.id !== product.id);

  filtered.unshift(product);

  localStorage.setItem(KEY, JSON.stringify(filtered.slice(0, 6)));
}

export function getRecentlyViewed() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
