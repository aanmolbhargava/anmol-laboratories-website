import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import AuthBanner from "./AuthBanner";
import { resetPassword } from "../../services/authService";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await resetPassword(email);

      toast.success("Password reset email sent.");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[36px] bg-white shadow-2xl lg:grid-cols-2">
      <AuthBanner />

      <div className="p-10 lg:p-16">
        <h1 className="text-4xl font-black">Forgot Password</h1>

        <p className="mt-3 text-gray-500">Enter your email address.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded-xl border p-4"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-green-700 py-4 font-bold text-white"
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>

        <p className="mt-8">
          <Link to="/login" className="font-semibold text-green-700">
            ← Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
