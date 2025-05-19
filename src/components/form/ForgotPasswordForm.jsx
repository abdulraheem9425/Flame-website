import InputField from "./InputField"; // Assuming InputField is in the same folder
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement send reset link logic
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full mt-40 mb-40 p-10 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-yellow-500 text-white rounded-2xl font-semibold hover:bg-yellow-600 transition focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="text-yellow-500 hover:text-yellow-600 font-medium transition"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
