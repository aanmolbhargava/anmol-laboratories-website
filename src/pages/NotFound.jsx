import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8FBF8] px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-black text-green-700">404</h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition"
        >
          <HiOutlineHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
