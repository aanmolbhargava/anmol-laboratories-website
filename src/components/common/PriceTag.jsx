import {
  formatPrice,
  getDiscount,
  getSavings,
} from "../../utils/calculateDiscount";

export default function PriceTag({
  mrp,
  price,
  size = "normal",
}) {
  const discount = getDiscount(mrp, price);
  const savings = getSavings(mrp, price);

  const priceClass =
    size === "large"
      ? "text-4xl lg:text-5xl"
      : size === "small"
      ? "text-lg"
      : "text-2xl";

  return (
    <div className="space-y-2">

      <div className={`font-bold text-green-700 ${priceClass}`}>
        {formatPrice(price)}
      </div>

      {discount > 0 && (
        <div className="flex flex-wrap items-center gap-2">

          <span className="text-gray-400 line-through">
            {formatPrice(mrp)}
          </span>

          <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
            {discount}% OFF
          </span>

          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            Save {formatPrice(savings)}
          </span>

        </div>
      )}

    </div>
  );
}