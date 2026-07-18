export default function Input({
  label,
  className = "",
  ...props
}) {
  return (
    <div>

      {label && (
        <label className="mb-2 block font-medium text-gray-700">

          {label}

        </label>
      )}

      <input
        {...props}
        className={`w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 ${className}`}
      />

    </div>
  );
}