export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}