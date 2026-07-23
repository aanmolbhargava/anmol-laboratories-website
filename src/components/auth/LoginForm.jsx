import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthBanner from "./AuthBanner";
import { login, loginWithGoogle } from "../../services/authService";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(form.email, form.password);

      toast.success("Welcome back!");

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();

      toast.success("Logged in successfully");

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[36px] bg-white shadow-2xl lg:grid-cols-2">
      <AuthBanner />

      <div className="p-10 lg:p-16">
        <h2 className="text-4xl font-black text-gray-900">Sign In</h2>

        <p className="mt-3 text-gray-500">
          Login to access your orders and account.
        </p>

        <button
          onClick={handleGoogle}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border py-4 font-semibold transition hover:bg-gray-50"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-sm text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form onSubmit={handleLogin}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="mb-5 w-full rounded-xl border p-4"
          />

          <div className="relative">
            <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >
              {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
            </button>
          </div>

          <div className="mt-5 flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-green-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-green-700 py-4 font-bold text-white hover:bg-green-800"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-green-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
