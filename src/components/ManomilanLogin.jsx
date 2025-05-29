import React, { useState } from 'react';
import { Menu, Heart } from 'lucide-react';

export default function ManomilanLogin() {
  const [userInput, setUserInput] = useState('');
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [showPassword, setShowPassword] = useState(false);

  const handlePinChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handlePinKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
        <div className="flex items-center justify-end px-4 py-3">
          <button className="p-3 shadow-2xl cursor-pointer bg-white">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 py-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-blue-500 fill-current" />
              <Heart className="w-6 h-6 text-red-500 fill-current -ml-2" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-red-500">Manomilan</span>
                <span className="text-xs text-gray-500">.com</span>
              </h1>
              <p className="text-xs text-gray-500 tracking-wider">RELATIONSHIPS</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md space-y-6">
          {/* User ID Input */}
          <div>
            <input
              type="text"
              placeholder="UserID / Mobile No / Email ID"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* PIN Input */}
          <div>
            <div className="space-y-2">
              <label className="text-gray-500 text-sm">Password</label>
              <div className="flex space-x-2 justify-start">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type={showPassword ? "text" : "password"}
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    onKeyDown={(e) => handlePinKeyDown(index, e)}
                    className="w-12 h-12 border-2 border-gray-300 rounded text-center text-lg font-mono focus:border-blue-500 focus:outline-none"
                    maxLength={1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Login Button and Forgot Password */}
          <div className="flex items-center justify-between pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors duration-200">
              LOGIN
            </button>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Register Button */}
        <div className="w-full max-w-md mt-16">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded transition-colors duration-200">
            Register FREE (Create New Profile)
          </button>
        </div>

        {/* Quick Search and Success Stories */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-8">
          <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded transition-colors duration-200">
            Quick Search
          </button>
          <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded transition-colors duration-200">
            Success Stories
          </button>
        </div>
      </div>
    </div>
  );
}