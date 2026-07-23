import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import toast from "react-hot-toast";

import AuthBanner from "./AuthBanner";

import { register, loginWithGoogle } from "../../services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must contain at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      await register(form.name, form.email, form.password);

      toast.success("Account created successfully!");

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

      toast.success("Welcome!");

      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] bg-white shadow-2xl lg:grid-cols-2">
      <AuthBanner />

      <div className="p-10 lg:p-16">
        <h1 className="text-4xl font-black">Create Account</h1>

        <p className="mt-3 text-gray-500">
          Register to track orders and manage your account.
        </p>

        <button
          onClick={handleGoogle}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border py-4 font-semibold hover:bg-gray-50"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            required
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border p-4"
          />

          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
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

          <div className="relative">
            <input
              required
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-4"
            >
              {showConfirm ? <HiOutlineEyeOff /> : <HiOutlineEye />}
            </button>
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-green-700 py-4 font-bold text-white hover:bg-green-800"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-8 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-green-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
