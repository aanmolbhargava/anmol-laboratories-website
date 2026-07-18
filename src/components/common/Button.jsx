const Button = ({
  children,
  href,
  onClick,
  outline = false,
  className = "",
}) => {
  const styles = outline
    ? "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
    : "bg-green-700 text-white hover:bg-green-800";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;