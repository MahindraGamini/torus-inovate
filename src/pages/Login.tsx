import React, { useState } from "react";
import { Eye, EyeOff, User, Lock, Check } from 'lucide-react';

const LoginPage: React.FC = () => {
  const validUser = {
    email: "user@gmail.com",
    password: "password123",
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === validUser.email && password === validUser.password) {
      setIsLoggedIn(true);
      setError(null);
      localStorage.setItem('user',validUser.email);
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } else {
      setError("Invalid email or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 ">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 text-center">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Welcome Back
          </h1>
          <p className="text-white/80 mt-2">Sign in to continue</p>
        </div>

        <div className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-green-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex justify-end">
                <a 
                  href="#" 
                  className="text-sm text-green-600 hover:text-green-800 transition duration-300"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                disabled={isLoggedIn}
                className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                  isLoggedIn 
                    ? 'bg-green-400 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
                }`}
              >
                {isLoggedIn ? 'Logging in...' : 'Sign In'}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="animate-pulse w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-green-600 text-xl font-semibold">
                Authentication Successful
              </p>
              <p className="text-gray-600">Redirecting to Dashboard...</p>
            </div>
          )}

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a 
                href="#" 
                className="text-green-600 hover:text-green-800 font-semibold transition duration-300"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;