import { HiMinus, HiPlus } from "react-icons/hi";

export default function QuantitySelector({
  qty,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-green-200 bg-white shadow-sm">

      <button
        onClick={onDecrease}
        className="flex h-11 w-11 items-center justify-center transition hover:bg-green-50"
      >
        <HiMinus />
      </button>

      <span className="flex h-11 min-w-[52px] items-center justify-center border-x text-lg font-bold">
        {qty}
      </span>

      <button
        onClick={onIncrease}
        className="flex h-11 w-11 items-center justify-center transition hover:bg-green-50"
      >
        <HiPlus />
      </button>

    </div>
  );
}