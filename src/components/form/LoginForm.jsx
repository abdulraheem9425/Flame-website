import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mt-40 mb-40 p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Welcome Back</h2>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-9 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="text-right mb-4">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded-2xl font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline hover:text-blue-800 transition"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}
