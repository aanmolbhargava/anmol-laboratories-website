import { useEffect, useState } from "react";
import { getRecentlyViewed } from "../../utils/recentlyViewed";
import ProductCard from "../cards/ProductCard";

export default function RecentlyViewed({ currentId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const viewed = getRecentlyViewed().filter((item) => item.id !== currentId);

    setProducts(viewed);
  }, [currentId]);

  if (products.length === 0) return null;

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-3xl font-bold">Recently Viewed</h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
