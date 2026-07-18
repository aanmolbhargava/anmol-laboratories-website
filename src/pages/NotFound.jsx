import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-8xl font-bold text-green-700">404</h1>

      <p className="text-xl text-gray-600">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;