import products from "../data/products";
import { categoryMeta } from "./categoryMeta";

export default function getManufacturingCategories() {
  return Object.entries(categoryMeta)
    .map(([category, meta]) => {
      const categoryProducts = products.filter(
        (p) => p.category === category
      );

      if (categoryProducts.length === 0) return null;

      return {
        category,
        ...meta,
        count: categoryProducts.length,
        image: categoryProducts[0].image,
      };
    })
    .filter(Boolean);
}