import React, { useState } from "react";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      setSuccess("");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      setSuccess("");
    } else {
      setError("");
      setLoading(true);
      axios
        .post("http://localhost:5000/api/subscribe", { email })
        .then((response) => {
          setSuccess(response.data.message);
          setEmail("");
        })
        .catch((err) => {
          setError(
            err.response?.data?.error || "Failed to subscribe. Try again."
          );
          setSuccess("");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <footer className="bg-red-800 text-white px-8 py-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="flex flex-col sm:gap-6 md:flex-row w-full md:w-2/3">
          <div className="flex justify-center sm:justify-start">
            <img
              src="/assets/images/home/logo.png"
              alt="Flame 'n Bun Logo"
              className="mt-2 w-24 h-24"
            />
          </div>

          <div className="mt-6 sm:mt-3">
            <div className="flex flex-wrap gap-12 font-semibold text-sm justify-center sm:justify-start">
              <a href="#" className="hover:underline">
                Franchising
              </a>
              <a href="#" className="hover:underline">
                Nutrition & Allergens
              </a>
              <a href="#" className="hover:underline">
                What's New
              </a>
              <a href="#" className="hover:underline">
                Jobs
              </a>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </div>

            <div className="mt-12 text-yellow-400 font-bold text-2xl text-center sm:text-left">
              BECOME A FLAME 'N BUN FAN
            </div>

            <div className="flex flex-col sm:flex-row mt-2 gap-2 items-center sm:items-start">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter your email address"
                className="rounded-none sm:w-64 px-4 py-2 text-black text-sm w-full"
                disabled={loading}
              />
              <Button
                onClick={handleJoin}
                className="rounded-none bg-red-600 hover:bg-red-700 text-yellow-400 h-10 w-full sm:w-auto"
                disabled={loading}
              >
                {loading ? "Joining..." : "Join"}
              </Button>
            </div>

            {error && (
              <p className="text-sm text-yellow-200 mt-1 text-center sm:text-left">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-green-200 mt-1 text-center sm:text-left">
                {success}
              </p>
            )}

            <p className="text-xs mt-4 text-center sm:text-left">
              By joining, you agree to our{" "}
              <Link to="/privacy-policy" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-and-conditions" className="underline">
                Terms and Conditions
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 text-sm w-full md:w-1/3 mt-8 md:mt-2 items-center md:items-end">
          <div className="flex gap-4 text-4xl mt-2 text-yellow-400">
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div className="font-bold text-xl text-yellow-400">
            Download the Flame 'n Bun App
          </div>
          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            <a href="#">
              <img
                src="/assets/images/home/app.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="/assets/images/home/play.webp"
                alt="Get it on Google Play"
                className="h-24 w-32 relative bottom-7"
              />
            </a>
          </div>

          {/* Footer Links */}
          <div className="text-xs relative bottom-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="underline">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="underline">
                Terms and Conditions
              </Link>
            </div>
            <div>© {new Date().getFullYear()} Copyright Flame'n Bun</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;