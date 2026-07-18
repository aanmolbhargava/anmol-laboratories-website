const SectionTitle = ({
  badge,
  title,
  subtitle,
  center = false,
}) => {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;