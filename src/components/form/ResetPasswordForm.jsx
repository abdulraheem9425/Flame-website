import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: Add your password reset logic here
    alert("Password has been reset!");
  };

  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full mt-40 mb-40 p-10 bg-white rounded-3xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* New Password */}
          <div className="mb-6 relative">
            <label htmlFor="newPassword" className="block text-gray-700 mb-1 font-medium">
              New Password
            </label>
            <input
              id="newPassword"
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-yellow-400 focus:border-yellow-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              aria-describedby="passwordHelp"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide new password" : "Show new password"}
              className="absolute right-4 top-9 text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <small id="passwordHelp" className="text-gray-500 text-xs mt-1 block">
              Minimum 8 characters.
            </small>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-1 font-medium">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-yellow-400 focus:border-yellow-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              className="absolute right-4 top-9 text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="mb-4 text-red-600 font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-yellow-500 text-white rounded-2xl font-semibold hover:bg-yellow-600 transition focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 text-sm">
          Remember your password?{" "}
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
