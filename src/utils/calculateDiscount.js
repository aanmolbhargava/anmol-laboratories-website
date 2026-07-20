export function getDiscount(mrp, price) {
  if (!mrp || !price || mrp <= price) return 0;

  return Math.round(((mrp - price) / mrp) * 100);
}

export function getSavings(mrp, price) {
  return mrp - price;
}

export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}