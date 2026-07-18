import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-green-700 text-white hover:bg-green-800 shadow-lg hover:shadow-xl",

    secondary:
      "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",

    white:
      "bg-white text-green-700 hover:bg-gray-100",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (to)
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );

  if (href)
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}