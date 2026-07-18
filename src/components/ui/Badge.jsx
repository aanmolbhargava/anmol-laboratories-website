export default function Badge({
  children,
  color = "green",
}) {
  const colors = {
    green:
      "bg-green-100 text-green-700",

    blue:
      "bg-cyan-100 text-cyan-700",

    yellow:
      "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}