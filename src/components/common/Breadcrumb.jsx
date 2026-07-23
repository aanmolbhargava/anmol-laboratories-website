import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

export default function Breadcrumb({ items }) {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-gray-500">
      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-2">
            {last ? (
              <span className="font-semibold text-green-700">{item.label}</span>
            ) : (
              <Link to={item.to} className="transition hover:text-green-700">
                {item.label}
              </Link>
            )}

            {!last && <HiChevronRight size={16} />}
          </div>
        );
      })}
    </nav>
  );
}
