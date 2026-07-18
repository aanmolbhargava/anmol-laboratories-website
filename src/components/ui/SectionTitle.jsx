import Badge from "./Badge";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <Badge>

          {badge}

        </Badge>
      )}

      <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">

        {title}

      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">

          {subtitle}

        </p>
      )}
    </div>
  );
}