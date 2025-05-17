import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full mt-40 mb-40 p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Reset Your Password
        </h2>

        <form>
          {/* New Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-1 font-medium">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="newPassword"
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

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-1 font-medium">Confirm Password</label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-500"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-9 cursor-pointer text-gray-600"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-2xl font-medium hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline hover:text-blue-800 transition"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
