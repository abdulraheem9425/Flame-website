import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add your login logic here
    alert("Login submitted");
  };

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full mt-40 mb-40 p-10 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-yellow-400
                         focus:border-yellow-400 transition"
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2 font-semibold">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-yellow-400
                         focus:border-yellow-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 transform -translate-y-1/2
                         text-gray-600 hover:text-yellow-500 transition
                         focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-yellow-500 hover:text-yellow-600 font-medium transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white
                       rounded-2xl font-semibold transition focus:outline-none
                       focus:ring-4 focus:ring-yellow-400 cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-yellow-500 hover:text-yellow-600 font-medium transition"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
