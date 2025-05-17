// ForgotPasswordForm.jsx
import InputField from "./InputField"; // Assuming InputField is in same folder
import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  return (
    <div className="bg-red-700 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full mt-40 mb-40 p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Forgot Password
        </h2>

        <form>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            placeholder="you@example.com"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-2xl font-medium hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
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
