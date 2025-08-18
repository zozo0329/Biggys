import React from "react";
import PugIcon from "../../../assets/PugIcon.png";
const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="flex justify-center items-end gap-1 text-2xl font-bold  text-gray-800 mb-6">
          Login
          <span>
            <img className="w-7 h-7" src={PugIcon} alt="Pug Icon" />
          </span>
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-[#f8bf42] focus:border-[#f8bf42]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-[#f8bf42] focus:border-[#f8bf42]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#f8bf42] text-white font-bold py-2 rounded-lg 
                       hover:bg-[#f9d689] transition-colors duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Extra links */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
